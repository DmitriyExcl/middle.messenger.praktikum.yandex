import View from '../../../../services/view/view';
import { editUsersModalTmpl } from './edit-users-modal.tmpl';
import { IChildrenEditUsersModal, IPropsEditUsersModal } from './edit-users-modal.types';
import connect from '../../../../utils/connect';
import isEqual from '../../../../utils/isEqual';
import { Modal } from '../../../../components/modal';
import store from '../../../../store/store';
import { chatsService } from '../../../../services/chats/chats.service';
import last from '../../../../utils/last';
import { AddUsersModal } from './add-users-modal';
import { router } from '../../../../services/router/router';
import { ROUTE_PAGES } from '../../../../../configRouting';

class EditUsersModal extends View<IPropsEditUsersModal, IChildrenEditUsersModal> {
  deletedUser: string;

  constructor(props: IPropsEditUsersModal) {
    super('div', props);
    this.hide();
  }

  componentDidMount() {
    this.initChildren();
    this.initEvents();
  }

  componentDidUpdate(oldProps: IPropsEditUsersModal, newProps: IPropsEditUsersModal): boolean {
    if (isEqual(oldProps, newProps)) return false;
    return true;
  }

  render(): DocumentFragment {
    return this.compile(editUsersModalTmpl);
  }

  initChildren(): void {
    this.children.addUsersModal = new AddUsersModal({});
    this.children.confirmModal = new Modal({
      confirm: '',
      buttonId: '',
      cancel: 'Отмена',
      message: '',
    });
  }

  initEvents(): void {
    this.setProps({
      events: {
        click: (event: Event) => {
          if ((event.target as HTMLElement).id === 'add-users-icon') {
            this.children.addUsersModal.open();
          }
          if ((event.target as HTMLElement).id === 'chat-remove-user') {
            this.openConfirmModal(event.target as HTMLElement);
          }
          if ((event.target as HTMLElement).id === 'delete-user-from-chat') {
            this.deleteUser();
          }
        },
      },
    });
  }

  openConfirmModal(user: HTMLElement): void {
    this.children.confirmModal.show();
    this.deletedUser = user.parentElement!.id;

    const currentUser = store.getState().chatUsers?.find((i) => i.id === +this.deletedUser);
    const currentUserName = `${currentUser?.first_name} ${currentUser?.second_name}`;

    if (+this.deletedUser !== store.getState().user?.id!) {
      this.children.confirmModal.setProps({
        target: currentUserName,
        confirm: 'Удалить',
        buttonId: 'delete-user-from-chat',
        message: 'Вы уверены, что хотите удалить пользователя',
      });
    } else {
      this.children.confirmModal.setProps({
        confirm: 'Покинуть',
        buttonId: 'delete-user-from-chat',
        message: 'Вы действительно хотите выйти из чата',
        target: '',
      });
    }
  }

  deleteUser(): void {
    chatsService.deleteUser(
      +last(document.location.pathname.split('/')),
      this.deletedUser,
    )
      .then(() => {
        if (+this.deletedUser !== store.getState().user?.id!) {
          this.children.confirmModal.close();
        } else {
          this.children.confirmModal.close();
          this.close();
          router.go(ROUTE_PAGES.CHAT);
          chatsService.getChats();
        }
      });
  }

  open(): void {
    this.show();
  }

  close(): void {
    this.hide();
  }
}

export const EditUsersModalWrap = connect((state) => ({
  chatUsers: state?.chatUsers,
}))(EditUsersModal as typeof View);
