import Block from '../../Core/Block/Block';

import './style.scss';

type inputType = 'text' | 'password' | 'email';

interface InputProps {
  onChange?: () => void;
  type?: inputType;
  placeholder?: string;
  value?: string;
  error?: string;
  onBlur?: () => void;
  onFocus?: () => void;
}

// eslint-disable-next-line import/prefer-default-export
export class Input extends Block {
 public static  componentName = 'Input';
  constructor({
    onChange = () => { }, onFocus = () => { }, onBlur = () => { }, type = 'text', error, placeholder, value,
  }: InputProps) {
    super({
      type, placeholder, value, error, events: { input: onChange, focus: onFocus, onblur: onBlur },
    });
  }

  protected render(): string {
    return `
      <div>
        <input class="main_input" type="{{type}}" placeholder="{{placeholder}}" value="{{value}}">
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `;
  }
}
