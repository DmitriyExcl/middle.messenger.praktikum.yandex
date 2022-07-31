import Block from '../../Core/Block/Block';
import { withRouter, withStore } from '../../Utils';

export class EditData extends Block {
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

      _editData: () => {
        const edit = {
          first_name: (this.refs.first_name.firstElementChild as HTMLInputElement).value,
          second_name: (this.refs.second_name.firstElementChild as HTMLInputElement).value,
          login: (this.refs.login.firstElementChild as HTMLInputElement).value,
          email: (this.refs.email.firstElementChild as HTMLInputElement).value,
          password: (this.refs.password.firstElementChild as HTMLInputElement).value,
          phone: (this.refs.phone.firstElementChild as HTMLInputElement).value,
        };
        console.log('edit-data-state', edit);
      },
    };
  }

  render() {
    const { values } = this.state;
    return `
        <div>
           <div>
        {{{Link text="Назад" to="/chat"}}}

          <form class="login-form form">
  
            {{{Input
                value="${values.first_name}"
                ref="first_name"
                id="first_name"
                type="text"
                placeholder="Фамилия"
            }}}
  
            {{{Input
                value="${values.second_name}"
                ref="second_name"
                id="second_name"
                type="text"
                placeholder="Имя"
            }}}
  
            {{{Input
                value="${values.login}"
                ref="login"
                id="login"
                type="text"
                placeholder="Логин"
            }}}
  
            {{{Input
                value="${values.email}"
                ref="email"
                id="email"
                type="text"
                placeholder="Email"
            }}}
  
            {{{Input
              value="${values.password}"
              ref="password"
              id="password" 
              type="password"
              placeholder="Пароль"
            }}}
  
            {{{Input
                value="${values.phone}"
                ref="phone"
                id="phone"
                type="number"
                placeholder="Телефон"
            }}}
  
            {{{Button
              text="Изменить"
              onClick=_editData
            }}}
          </form>
        </div>
      </div>
    `;
  }
}

export default withRouter(withStore(EditData));
