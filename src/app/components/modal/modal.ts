import View from '../../services/view/view';
import { modalTmpl } from './modal.tmpl';
import { IChildrenModal, IPropsModal } from './modal.types';
import { Button } from '../button';

export class Modal extends View<IPropsModal, IChildrenModal> {
  constructor(props: IPropsModal) {
    super('div', props);
    this.hide();
  }

  componentDidMount(): void {
    this.initChildren();
    this.initEvents();
  }

  componentDidUpdate(oldProps: IPropsModal, newProps: IPropsModal): boolean {
    if (oldProps.confirm !== newProps.confirm) {
      this.children.confirm.setProps({ name: newProps.confirm });
    }

    if (oldProps.buttonId !== newProps.buttonId) {
      this.children.confirm.setProps({ id: newProps.buttonId });
    }

    return true;
  }

  render(): DocumentFragment {
    return this.compile(modalTmpl);
  }

  initChildren(): void {
    this.children.confirm = new Button({
      name: this.props.confirm,
      id: this.props.buttonId,
    });

    this.children.cancel = new Button({
      name: this.props.cancel,
      id: 'c-modal-cancel',
    });
  }

  initEvents(): void {
    this.setProps({
      events: {
        click: (event: Event) => {
          if ((event.target as HTMLElement).id === 'c-modal-cancel') this.close();
        },
      },
    });
  }

  open(): void {
    this.show();
  }

  close(): void {
    this.hide();
  }
}
