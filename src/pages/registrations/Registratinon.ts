import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import { ValidationLogin } from '../../Utils/Validation/ValidationLogin';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export class RegistrationPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
      },
      errors: {
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        password: '',
        phone: '',
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

        const errorsState = {
          errors: {
            first_name: '',
            second_name: '',
            login: '',
            email: '',
            password: '',
            phone: '',
          },
          values: { ...registrationData },
        };

        if (!registrationData.first_name) {
          errorsState.errors.first_name = ValidationLogin.REQUIRED_TEXT;
        } if (!registrationData.second_name) {
          errorsState.errors.second_name = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.login) {
          errorsState.errors.login = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.email) {
          errorsState.errors.email = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.password) {
          errorsState.errors.password = ValidationLogin.REQUIRED_TEXT;
        }
        if (!registrationData.phone) {
          errorsState.errors.phone = ValidationLogin.REQUIRED_TEXT;
        }
        this.setState(errorsState);

        console.log('registration-state', registrationData);
      },
    };
  }

  render() {
    const { errors, values } = this.state;
    return `
    <div class="box">
      <div class="registration">
    <h3 class="registration__header">Регистрация</h3>

        <form class="registration__form" id="registration">

          {{{Input
              value="${values.first_name}"
              error="${errors.first_name}"
              ref="first_name"
              id="first_name"
              type="text"
              placeholder="Фамилия"
          }}}

          {{{Input
              value="${values.second_name}"
              error="${errors.second_name}"
              ref="second_name"
              id="second_name"
              type="text"
              placeholder="Имя"
          }}}

          {{{Input
              value="${values.login}"
              error="${errors.login}"
              ref="login"
              id="login"
              type="text"
              placeholder="Логин"
          }}}

          {{{Input
              value="${values.email}"
              error="${errors.email}"
              ref="email"
              id="email"
              type="text"
              placeholder="Email"
          }}}

          {{{Input
            value="${values.password}"
            error="${errors.password}"
            ref="password"
            id="password" 
            type="password"
            placeholder="Пароль"
          }}}

          {{{Input
              value="${values.phone}"
              error="${errors.phone}"
              ref="phone"
              id="phone"
              type="number"
              placeholder="Телефон"
          }}}

          {{{Button
            to="${ROUTE_PAGES.CHAT}"
            text="Регистрация"
            onClick=_sendRegistrationData
          }}}
        </form>
      </div>
    </div>
    `;
  }
}
