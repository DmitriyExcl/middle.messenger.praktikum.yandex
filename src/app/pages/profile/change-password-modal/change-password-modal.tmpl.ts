export const changePasswordModalTmpl = `
    <div>
        <div class="change-password-modal">
            <div class="change-password-modal__header">Изменить пароль</div>
             <form class="change-password-modal__form">
                {{{ oldPasswordInput }}}
                {{{ passwordInput }}}
                {{{ passwordRepeatInput }}}
                
                {{{ submitBtn }}}
            </form>
            
            {{{ linkBtn }}}
        </div>
    </div>
`;
