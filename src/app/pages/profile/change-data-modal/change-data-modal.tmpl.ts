export const changeDataModalTmpl = `
    <div>
        <div class="change-data-modal">
            
            <div class="change-data-modal__header">Изменить данные</div>
            
            <form class="change-data-modal__form">
                {{{ emailInput }}}
                {{{ loginInput }}}
                {{{ firstNameInput }}}
                {{{ secondNameInput }}}
                {{{ displayNameInput }}}
                {{{ phoneInput }}}
                
                {{{ submitBtn }}}
            </form>
            
            {{{ linkBtn }}}
        </div>
    </div>
`;
