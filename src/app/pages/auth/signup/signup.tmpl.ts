export const signUpTmpl = `
    <div class="signup__wrapper">
        <div class="signup" id="signup">   
        <div>Регистрация</div>   
            <form class="signup__form">
                {{{ emailInput }}}
                {{{ loginInput }}}
                {{{ nameInput }}}
                {{{ lastNameInput }}}
                {{{ phoneInput }}}
                {{{ passwordInput }}}
                {{{ passwordRepeatInput }}}
                {{{ submitBtn }}}
            </form>
            {{{ linkBtn }}}
        </div>
    </div>
`;
