import { ROUTE_PAGES } from '../../configRouting';
import { BrowserRouter, Store } from '../../Core';
import Block from '../../Core/Block/Block';
import { logout } from '../../services/auth';
import { withRouter, withStore } from '../../Utils';
import './style.scss';

type ProfilePageProps = {
  router: BrowserRouter;
  store: Store<AppState>;
  onLogout?: () => void;
  userLogin?: () => string | undefined;
  userName?: () => string | undefined;
};
export class UserProfilePage extends Block {
  constructor(props: ProfilePageProps) {
    super(props);

    this.setProps({
      onLogout: () => this.props.store.dispatch(logout),
      userLogin: () => this.props.store.getState().user?.login,
      userName: () => this.props.store.getState().user?.firstName,
    });
  }

  protected getStateFromProps() {
    this.state = {
      _goBack: () => this.props.router.go(ROUTE_PAGES.CHAT),
      _goNext: () => this.props.router.go(ROUTE_PAGES.EDIT_DATA),
    };
  }

  render() {
    return `
            <div class="container">
            {{{Button
              text="Назад"
              onClick=goBack
            }}}
                <div class="profile">

                <aside class="user" id="user">
                <div class="user__main">
                  <div class="avatar__wrap">
                    <img
                      src="../../../static/images/defaultAvatar.jpg"
                      alt="user avatar"
                      class="avatar users__avatar"
                      id="userAvatar"
                    />
                  </div>
                  <span class="user__name">user name</span>
                </div>
              </aside>
                    <div>
                    <p>Почта</p>
                    <p>Логин</p>
                    <p>Имя</p>
                    <p>Фамилия</p>
                    <p>Телефон</p>
                    <p>Имя в чате</p>
                  </div>
                    <div>
                    {{{Button
                      text="Изменить данные"
                      onClick=_goNext
                    }}}
                        <hr/>
                        {{{Link text="Изменить пароль" to="${ROUTE_PAGES.EDIT_PASSWORD}"}}}
                        <hr/>
                        {{{Link text="Выйти" to="${ROUTE_PAGES.LOGIN}"}}}
                    </div>
                </div>
            </div>
        `;
  }
}

export default withRouter(withStore(UserProfilePage));
