import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import { BrowserRouter } from '../../Core/BrowserRouter';
import { Store } from '../../Core/Store';
import { login } from '../../services/auth';
import { withRouter, withStore } from '../../Utils';
import {
  FindOneSymbol,
  ValidationLogin,
  ValidationPassword,
  validPasswordReg,
} from '../../Utils/Validation/Validation';
import './style.scss';

type LoginPageProps = {
  router: BrowserRouter;
  store: Store<AppState>;
  formError?: () => string | null;
};

// eslint-disable-next-line import/prefer-default-export
export class LoginPage extends Block {
  constructor(props: LoginPageProps) {
    super(props);

    this.setProps({
      formError: () => this.props.store.getState().loginFormError,
    });
  }

  componentDidMount() {
    if (this.props.store.getState().user) {
      this.props.router.go(ROUTE_PAGES.CHAT);
    }
  }

  protected getStateFromProps() {
    this.state = {
      login: {
        values: '',
        errors: '',
      },
      password: {
        values: '',
        errors: '',
      },
      _goRegistr: () => {
        this.props.router.go(ROUTE_PAGES.REGISTRATION);
      },
      _sendLoginData: () => {
        let hasError = false;
        const loginData = {
          login: (this.refs.login.children[0] as HTMLInputElement).value,
          password: (this.refs.password.children[0] as HTMLInputElement).value,

        };

        const nextState = {
          login: {
            values: '',
            errors: '',
          },
          password: {
            values: '',
            errors: '',
          },
          values: { ...loginData },
        };

        if (!loginData.login) {
          hasError = true;
          nextState.login.errors = ValidationLogin.REQUIRED_TEXT;
        }
        if (!loginData.password) {
          hasError = true;
          nextState.password.errors = ValidationLogin.REQUIRED_TEXT;
        }

        this.setState(nextState);
        if (!hasError) {
          this.props.store.dispatch(login, loginData);
          this.props.router.go(ROUTE_PAGES.CHAT);
        }
        console.log('login-state', loginData);
      },

      validateBlurPassword: (e: Event) => {
        let hasError = false;
        const { target } = e;
        const { value } = target as HTMLInputElement;
        const nextState = {
          password: {
            values: value,
            errors: '',
          },
        };
        if (!value) {
          hasError = true;
          nextState.password.errors = ValidationPassword.REQUIRED_TEXT;
        } else if (value.length < 8) {
          hasError = true;
          nextState.password.errors = ValidationPassword.MAX_LENGTH;
        } else if (!validPasswordReg.test(value)) {
          nextState.password.errors = ValidationPassword.INFO;
        }
        this.setState(nextState);
      },
      validateBlurLogin: (e: Event) => {
        let hasError = false;
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
    };
  }

  render() {
    const { login, password } = this.state;

    return `
    <div class="auth__block">
      <div class="authorizatons">
    <h3 class="authorizatons__header">Авторизация</h3>

        <form class="auth__block__form">

          {{{Input
            value="${login.values}"
            error="${login.errors}"
            ref="login"
            id="login"
            type="text"
            name="login"
            placeholder="Логин"
            onBlur=validateBlurLogin
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

          {{{Button
            text="Войти"
            onClick=_sendLoginData
          }}}
          {{{Button
            text="Регистрация"
            onClick=_goRegistr
          }}}
        </form>
      </div>
    </div>
    `;
  }
}

export default withRouter(withStore(LoginPage));