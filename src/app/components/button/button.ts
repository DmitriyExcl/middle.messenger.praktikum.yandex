import { buttonTmpl } from './button.tmpl';
import { IPropsButton } from './button.types';
import View from '../../services/view/view';

export class Button extends View<IPropsButton, void> {
  constructor(props: IPropsButton) {
    super('div', props);
  }

  componentDidMount() {
    this.getContent().classList.add('c-button');
    if (this.props?.class) this.getContent().classList.add(this.props.class);
    if (this.props?.size) this.getContent().classList.add(`c-button_${this.props.size}`);
    if (this.props?.color) this.getContent().classList.add(`c-button_${this.props.color}`);

  }

  render(): DocumentFragment {
    return this.compile(buttonTmpl);
  }

}
