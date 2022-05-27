import Block from '../../Core/Block/Block';

import './style.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export class Button extends Block {
  public static  componentName = 'Button';
  constructor(props: ButtonProps) {
    super({ ...props, events: { click: props.onClick } });
  }

  protected render(): string {
    return `
      <div class="main_button">
       <a class="main_button_link" href="{{to}}">{{text}}</a>
      </div>
    `;
  }
}
