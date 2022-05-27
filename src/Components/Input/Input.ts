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
  public static componentName = 'Input';

  constructor(
    props: InputProps,
  ) {
    super({
      ...props,
      events: { input: props.onChange, focusout: props.onBlur, focusin: props.onFocus },
    });
  }

  protected render(): string {
    return `
      <div>
        <input class="main_input" type="{{type}}" 
        placeholder="{{placeholder}}" value="{{value}}" name="{{name}}">
        <div class="input__error">{{#if error}}{{error}}{{/if}}</div>
      </div>
    `;
  }
}
