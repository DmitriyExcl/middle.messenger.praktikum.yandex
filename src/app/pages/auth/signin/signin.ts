/* eslint-disable @typescript-eslint/ban-types */
import { signinTmpl } from './signin.tmpl';
import { Button } from '../../../components/button';
import View from '../../../services/view/view';
import { Input } from '../../../components/input';
import { isValidLogin, isValidPassword } from '../../../utils/validate';
import {
  ESigninChildren, ESigninFormFields, ISigninChildren, ISigninFormValue,
} from './signin.types';
import { IEvents } from '../../../services/types';
import { authService } from '../../../services/auth/auth.service';
import { router } from '../../../services/router/router';
import { snackbar } from '../../../components/snackbar';
import { ucFirstLetter } from '../../../utils/ucFirstLetter';
import { loader } from '../../../components/loader';
import { chatsService } from '../../../services/chats/chats.service';
import { ROUTE_PAGES } from '../../../../configRouting';
import { ValidationLogin } from '../../../services/constants';

export class Signin extends View<{}, ISigninChildren> {
  signinFormValue: ISigninFormValue = {
    [ESigninFormFields.Login]: '',
    [ESigninFormFields.Password]: '',
  };

  get isValidSigninForm(): boolean {
    return isValidLogin(this.signinFormValue[ESigninFormFields.Login])
        && isValidPassword(this.signinFormValue[ESigninFormFields.Password]);
  }

  constructor(props: {}) {
    super('div', props);
  }

  componentDidMount(): void {
    this.initChildren();
    this.initChildrenEvents();
  }

  render(): DocumentFragment {
    return this.compile(signinTmpl);
  }

  initChildren(): void {
    this.children.loginInput = new Input({
      value: this.signinFormValue.login,
      id: 'signin-login',
      labelName: 'Логин',
      type: 'text',
      errorMessage: ValidationLogin.CHECK_VALUE_LOGIN,
    });

    this.children.passwordInput = new Input({
      value: this.signinFormValue.password,
      id: 'signin-password',
      labelName: 'Пароль',
      errorMessage: ValidationLogin.CHECK_VALUE_PASSWORD,
      type: 'password',
    });

    this.children.submitBtn = new Button({
      name: 'Войти',
      class: 'signin__button',
    });

    this.children.linkBtn = new Button({
      name: 'Регистрация',
      id: 'create-account-link',
      class: 'signin__button',
    });
  }

  initChildrenEvents(): void {
    this.children.loginInput.setProps({
      events: this.getInputEvents(ESigninChildren.LoginInput, ESigninFormFields.Login, isValidLogin),
    });

    this.children.passwordInput.setProps({
      events: this.getInputEvents(ESigninChildren.PasswordInput, ESigninFormFields.Password, isValidPassword),
    });

    this.children.submitBtn.setProps({
      events: {
        click: this.submit.bind(this),
      },
    });

    this.children.linkBtn.setProps({
      events: {
        click: () => {
          this.resetForm();
          router.go(ROUTE_PAGES.SIGN_UP);
        },
      },
    });
  }

  getInputEvents(
    inputName: ESigninChildren,
    formField: ESigninFormFields,
    validator: (text: string) => boolean,
  ): IEvents {
    return {
      input: (event) => {
        const target = event?.target as HTMLInputElement;
        this.signinFormValue[formField] = target.value;

        if (validator((this.signinFormValue[formField])) || this.signinFormValue[formField] === '') {
          this.children[inputName].getContent().classList.remove('c-input_invalid');
          return;
        }

        this.children[inputName].getContent().classList.add('c-input_invalid');
      },
      focusin: () => {
        if (this.signinFormValue[formField] === '') {
          this.children[inputName].getContent().classList.remove('c-input_invalid');
        }
      },
    };
  }

  submit(): void {
    if (!isValidLogin(this.signinFormValue.login)) {
      this.children.loginInput.getContent().classList.add('c-input_invalid');
    }

    if (!isValidPassword(this.signinFormValue.password)) {
      this.children.passwordInput.getContent().classList.add('c-input_invalid');
    }

    if (!this.isValidSigninForm) return;
    authService.login(this.signinFormValue)
      .then(() => {
        this.resetForm();
        router.go(ROUTE_PAGES.CHAT);

        loader.show();
        chatsService.getChats()
          .then(() => {
            loader.hide();
          });
      })
      .catch((e) => {
        snackbar.open(ucFirstLetter(e.reason || e.error));
      });
  }

  resetForm() {
    this.children.loginInput.setProps({ value: '' });
    this.children.loginInput.getContent().classList.remove('c-input_invalid');

    this.children.passwordInput.setProps({ value: '' });
    this.children.passwordInput.getContent().classList.remove('c-input_invalid');

    this.signinFormValue[ESigninFormFields.Login] = '';
    this.signinFormValue[ESigninFormFields.Password] = '';
  }
}
