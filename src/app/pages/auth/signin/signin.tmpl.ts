export const signinTmpl = `
    <div class="signin-wrapper">
        <div class="signin">
        <div>Логин</div>
            <form class="signin__form">
                {{{ loginInput }}}
                {{{ passwordInput }}}
                {{{ submitBtn }}}
            </form>
            {{{ linkBtn }}}
        </div>
    </div>
`;
