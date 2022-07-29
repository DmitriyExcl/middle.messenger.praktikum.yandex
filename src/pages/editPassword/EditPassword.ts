import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';

export class EditPasswordPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        oldPassword: '',
        newPassword: '',
      },
      errors: {
        oldPassword: '',
        newPassword: '',
      },

      _editPassword: () => {
        const editPassword = {
          oldPassword: (
            this.refs.oldPassword.firstElementChild as HTMLInputElement
          ).value,
          newPassword: (
            this.refs.newPassword.firstElementChild as HTMLInputElement
          ).value,
        };

        console.log('edit-password-state', editPassword);
      },
    };
  }

  render() {
    const { errors, values } = this.state;
    return `
        <div>
        <div>
        {{{Link text="Назад" to="${ROUTE_PAGES.CHAT}"}}}

          <form class="login-form form">
  
            {{{Input
                value="${values.oldPassword}"
                error="${errors.oldPassword}"
                ref="oldPassword"
                id="oldPassword"
                type="password"
                placeholder="Старый пароль"
            }}}
  
            {{{Input
                value="${values.newPassword}"
                error="${errors.newPassword}"
                ref="newPassword"
                id="newPassword"
                type="password"
                placeholder="Новый пароль"
            }}}
  
  
            {{{Button
              text="Изменить пароль"
              onClick=_editPassword
            }}}
          </form>
        </div>
      </div>
    `;
  }
}
