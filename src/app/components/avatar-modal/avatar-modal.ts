import View from '../../services/view/view';
import { avatarModalTmpl } from './avatar-modal.tmpl';
import { IChildrenChangeAvatarModal, IPropsChangeAvatarModal } from './avatar-modal.types';
import { Button } from '../button';

export class AvatarModal extends View<IPropsChangeAvatarModal, IChildrenChangeAvatarModal> {
  constructor(props: IPropsChangeAvatarModal) {
    super('div', props);
    this.hide();
  }

  componentDidMount() {
    this.initChildren();
  }

  render(): DocumentFragment {
    return this.compile(avatarModalTmpl);
  }

  initChildren(): void {
    this.children.confirmBtn = new Button({
      name: 'Изменить',
      id: this.props.confirmBtnId,
    });

    this.children.cancelBtn = new Button({
      name: 'Отмена',
      id: 'avatar-modal-cancel',
    });
  }


  open() {
    this.show();
  }

  close() {
    this.hide();
    (document.getElementById(this.props.inputId) as HTMLInputElement).value = '';
  }
}
