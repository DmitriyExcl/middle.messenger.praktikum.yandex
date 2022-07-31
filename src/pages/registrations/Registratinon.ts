import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import { login } from '../../services/auth';
import { withRouter, withStore } from '../../Utils';
import {
  FindOneSymbol, REQUIRED_TEXT, ValidationEmail, validationEmailReg, ValidationLogin, ValidationPassword, ValidationPhone, validationPhoneReg, validPasswordReg,
} from '../../Utils/Validation/Validation';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export class RegistrationPage extends Block {
  protected getStateFromProps() {
    let hasError = false;

    this.state = {
      first_name: {
        values: '',
        errors: '',
      },
      second_name: {
        values: '',
        errors: '',
      },
      login: {
        values: '',
        errors: '',
      },
      email: {
        values: '',
        errors: '',
      },
      password: {
        values: '',
        errors: '',
      },
      phone: {
        values: '',
        errors: '',
      },

      validateBlurPassword: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          password: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          nextState.password.errors = ValidationPassword.REQUIRED_TEXT;
          hasError = true;
        } else if (value.length < 8) {
          hasError = true;
          nextState.password.errors = ValidationPassword.MAX_LENGTH;
        } else if (!validPasswordReg.test(value)) {
          hasError = true;
          nextState.password.errors = ValidationPassword.INFO;
        }
        this.setState(nextState);
      },

      validateBlurLogin: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          login: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.login.errors = ValidationLogin.REQUIRED_TEXT;
        } else if (value.length < 4) {
          hasError = true;
          nextState.login.errors = ValidationLogin.MIN_LENGTH;
        } else if (!FindOneSymbol.test(value)) {
          hasError = true;
          nextState.login.errors = ValidationLogin.CHECK_ONE_SYMBOL;
        }
        this.setState(nextState);
      },

      validateBlurFirstName: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          first_name: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.first_name.errors = REQUIRED_TEXT;
        }
        this.setState(nextState);
      },

      validateBlurSecondName: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          second_name: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.second_name.errors = REQUIRED_TEXT;
        }
        this.setState(nextState);
      },

      validateBlurEmail: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          email: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.email.errors = REQUIRED_TEXT;
        } else if (!validationEmailReg.test(value)) {
          hasError = true;
          nextState.email.errors = ValidationEmail.CHECK_VALUE;
        }
        this.setState(nextState);
      },

      validateBlurPhone: (e: Event) => {
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          phone: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.phone.errors = REQUIRED_TEXT;
        } else if (!validationPhoneReg.test(value)) {
          hasError = true;
          nextState.phone.errors = ValidationPhone.CHECK_VALUE;
        }
        this.setState(nextState);
      },

      _sendRegistrationData: () => {
        const registrationData = {
          first_name: (this.refs.first_name.firstElementChild as HTMLInputElement).value,
          second_name: (this.refs.second_name.firstElementChild as HTMLInputElement).value,
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
        };

        const nextState = {
          first_name: {
            values: '',
            errors: '',
          },
          second_name: {
            values: '',
            errors: '',
          },
          login: {
            values: '',
            errors: '',
          },
          email: {
            values: '',
            errors: '',
          },
          password: {
            values: '',
            errors: '',
          },
          phone: {
            values: '',
            errors: '',
          },
          values: { ...registrationData },
        };

        if (!registrationData.first_name) {
          nextState.first_name.errors = ValidationLogin.REQUIRED_TEXT;
        } if (!registrationData.second_name) {
          nextState.second_name.errors = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.login) {
          nextState.login.errors = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.email) {
          nextState.email.errors = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.password) {
          nextState.password.errors = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.phone) {
          nextState.phone.errors = ValidationLogin.REQUIRED_TEXT;
        }
        this.setState(nextState);
        if (!hasError) {
          this.props.store.dispatch(login, registrationData);
          this.props.router.go(ROUTE_PAGES.CHAT);
        }

        console.log('registration-state', registrationData);
      },
    };
  }

  render() {
    const {
      first_name, second_name, login, email, password, phone,
    } = this.state;
    return `
    <div class="box">
      <div class="registration">
    <h3 class="registration__header">Регистрация</h3>

        <form class="registration__form" id="registration">

          {{{Input
              value="${first_name.values}"
              error="${first_name.errors}"
              ref="first_name"
              id="first_name"
              type="text"
              placeholder="Фамилия"
              onBlur=validateBlurFirstName
          }}}

          {{{Input
              value="${second_name.values}"
              error="${second_name.errors}"
              ref="second_name"
              id="second_name"
              type="text"
              placeholder="Имя"
              onBlur=validateBlurSecondName
          }}}

          {{{Input
              value="${login.values}"
              error="${login.errors}"
              ref="login"
              id="login"
              type="text"
              placeholder="Логин"
              onBlur=validateBlurLogin
          }}}

          {{{Input
              value="${email.values}"
              error="${email.errors}"
              ref="email"
              id="email"
              type="text"
              placeholder="Email"
              onBlur=validateBlurEmail
          }}}

          {{{Input
            value="${password.values}"
            error="${password.errors}"
            ref="password"
            id="password" 
            type="password"
            placeholder="Пароль"
            onBlur=validateBlurPassword
          }}}

          {{{Input
              value="${phone.values}"
              error="${phone.errors}"
              ref="phone"
              id="phone"
              type="number"
              placeholder="Телефон"
              onBlur=validateBlurPhone
          }}}

          {{{Button
            text="Регистрация"
            onClick=_sendRegistrationData
          }}}
        </form>
      </div>
    </div>
    `;
  }
}

export default withRouter(withStore(RegistrationPage));