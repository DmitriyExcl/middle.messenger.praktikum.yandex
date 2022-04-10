import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import { FindOneSymbol, ValidationLogin } from '../../Utils/Validation/ValidationLogin';
import './style.scss';

// eslint-disable-next-line import/prefer-default-export
export class LoginPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        login: '',
        password: '',
      },
      errors: {
        login: '',
        password: '',
      },

      _sendLoginData: () => {
        const loginData = {
          login: (this.refs.login.children[0] as HTMLInputElement).value,
          password: (this.refs.password.children[0] as HTMLInputElement).value,

        };

        const errorState = {
          errors: {
            login: '',
            password: '',
          },
          values: { ...loginData },
        };

        if (!loginData.login) {
          errorState.errors.login = ValidationLogin.REQUIRED_TEXT;
        } else if (loginData.login.length < 4) {
          errorState.errors.login = ValidationLogin.MIN_LENGTH;
        } else if (!FindOneSymbol.test(loginData.login)) {
          errorState.errors.login = ValidationLogin.CHECK_ONE_SYMBOL;
        }
        if (!loginData.password) {
          errorState.errors.password = ValidationLogin.CHECK_PASSWORD;
        }

        this.setState(errorState);

        console.log('login-state', loginData);
      },
    };
  }

  render() {
    const { errors, values } = this.state;
    return `
    <div class="auth__block">
      <div class="authorizatons">
    <h3 class="authorizatons__header">Авторизация</h3>

        <form class="auth__block__form">

          {{{Input
            value="${values.login}"
            error="${errors.login}"
            ref="login"
            id="login"
            type="text"
            placeholder="Логин"
          }}}

          {{{Input
            value="${values.password}"
            error="${errors.password}"
            ref="password"
            id="password" 
            type="password"
            placeholder="Пароль"
          }}}

          {{{Button
            to="${ROUTE_PAGES.CHAT}"
            text="Войти"
            onClick=_sendLoginData
          }}}
          {{{Button
            to="${ROUTE_PAGES.REGISTRATION}"
            text="Регистрация"
          }}}
        </form>
      </div>
    </div>
    `;
  }
}
