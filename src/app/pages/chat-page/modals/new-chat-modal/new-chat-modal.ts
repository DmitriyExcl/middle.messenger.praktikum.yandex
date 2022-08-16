/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/ban-types */
import View from '../../../../services/view/view';
import { Button } from '../../../../components/button';
import { IChildrenNewChatModal } from './new-chat-modal.types';
import { newChatModalTmpl } from './new-chat-modal.tmpl';

export class NewChatModal extends View<{ }, IChildrenNewChatModal> {
  constructor(props: { }) {
    super('div', props);
    this.hide();
  }

  componentDidMount() {
    this.initChildren();
  }

  render(): DocumentFragment {
    return this.compile(newChatModalTmpl);
  }

  initChildren(): void {
    this.children.confirmBtn = new Button({
      name: 'Создать',
      id: 'create-chat-modal-confirm',
    });

    this.children.cancelBtn = new Button({
      name: 'Отмена',
      id: 'create-chat-modal-cancel',
    });
  }

  open() {
    this.show();
    document.getElementById('create-chat-modal-input')!.focus();
  }

  close() {
    (document.getElementById('create-chat-modal-input') as HTMLInputElement).value = '';
    this.hide();
  }
}
