import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import './style.scss';

export class UserProfilePage extends Block {
  render() {
    return `
            <div class="container">
            {{{Link text="Назад" to="${ROUTE_PAGES.CHAT}"}}}
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
                        {{{Link text="Изменить данные" to="${ROUTE_PAGES.EDIT_DATA}"}}}
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
