import { chatListTmpl } from './chat-list.tmpl';
import View from '../../../services/view/view';
import { IChatListChildren, IChatListProps } from './chat-list.types';
import { ChatCards } from './chat-cards';
import { IChatCard } from '../../../services/chats/chats.types';
import { getElementId } from '../../../utils/getElementId';
import { chatsService } from '../../../services/chats/chats.service';
import last from '../../../utils/last';
import store from '../../../store/store';
import connect from '../../../utils/connect';
import { webSocketApi } from '../../../services/web-socket/web-socket';
import { loader } from '../../../components/loader';
import isEqual from '../../../utils/isEqual';
import { router } from '../../../services/router/router';

class ChatList extends View<IChatListProps, IChatListChildren> {
  chatCards!: IChatCard[];
  searchValue = '';

  constructor(props: IChatListProps) {
    super('div', props);
  }

  componentDidMount() {

    this.children.chatCards = new ChatCards({ chatCards: this.chatCards });

    this.openChat();
    this.initEvents();
  }

  componentDidUpdate(oldProps: IChatListProps, newProps: IChatListProps): boolean {
    this.chatCards = newProps.chatCards;

    if (!isEqual(newProps.chatCards, oldProps.chatCards)) {
      this.searchValue = '';
    }

    this.filterChatCards();

    if (isEqual(newProps.chatCards, oldProps.chatCards)) return false;
    return true;
  }

  render(): DocumentFragment {
    return this.compile(chatListTmpl);
  }

  openChat(): void {
    if (document.location.pathname.startsWith('/messenger/') && document.location.pathname !== '/messenger/') {
      const chatId = +last(document.location.pathname.split('/'));

      chatsService.getChatUsers(chatId)
        ?.then(() => {
          const currentChat = this.chatCards?.find((item) => item.status === 'active');
          store.set('currentChat', currentChat?.title);

          const chatId = +last(document.location.pathname.split('/'));

          chatsService.getChatToken(chatId).then((data) => {
            webSocketApi.open(data.token);
          });
        }).catch(() => {
          router.go('/client-error');
        });
    }
  }

  initEvents() {
    this.setProps({
      events: {
        click: (event: Event) => {
          if ((event.target as HTMLElement).id === 'setting-icon') router.go('/profile');

          if (!this.chatCards?.find(((item) => item.id === +getElementId(event.target as HTMLElement)!))) return;
          if (
            this.chatCards?.find((item) => item.status === 'active')?.id === +getElementId(event.target as HTMLElement)!
          ) return;

          this.switchChat(event.target as HTMLElement);
        },
        input: (event: Event) => {
          if ((event.target as HTMLElement).id !== 'input-search') return;

          this.searchValue = (event.target as HTMLInputElement).value.toLowerCase();
          this.filterChatCards();
        },
      },
    });
  }

  filterChatCards(): void {
    const filteredChatCards = this.chatCards?.filter((item) => item.title.toLowerCase()
      .includes(this.searchValue));
    this.children.chatCards.setProps({ chatCards: filteredChatCards });
  }

  switchChat(chat: HTMLElement): void {
    this.chatCards.forEach((item) => {
      if (item.id === +getElementId(chat)!) {
        item.status = 'active';
      } else {
        item.status = 'passive';
      }
    });

    const scrollChats = document.querySelector('.chat-list__available-chats')?.scrollTop;
    if (scrollChats || scrollChats === 0) {
      store.set('scrollChats', scrollChats);
    }
    store.set('currentMessages', []);

    document.querySelector('.chat-list__available-chats')?.scrollTo(0, scrollChats as number);
    (document.getElementById('message') as HTMLInputElement).value = '';

    loader.show();

    const currentChat = this.chatCards.find((item) => item.status === 'active');

    chatsService.getChatUsers(currentChat!.id)
      ?.then(() => {
        store.set('currentChat', currentChat!.title);
        document.querySelector('.chat-list__available-chats')?.scrollTo(0, scrollChats as number);
        router.go(`/messenger/${this.chatCards.find((item) => item.status === 'active')?.id}`);

        const chatId = +last(document.location.pathname.split('/'));

        chatsService.getChatToken(chatId).then((data) => {
          webSocketApi.open(data.token);
        });
      });
  }
}

export const ChatListWrap = connect<IChatListProps, IChatListChildren>((state) => ({
  chatCards: state?.chats,
}))(ChatList as unknown as typeof View);
