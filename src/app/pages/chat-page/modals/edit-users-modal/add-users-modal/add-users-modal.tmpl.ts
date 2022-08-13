export const addUsersModalTmpl = `
    <div class="add-users-modal-wrapper"> 
        <div class="add-users-modal">
            <div id="add-users-modal-close" class="add-users-modal__close-modal-icon">Закрыть</div>
            
            <div class="add-users-modal__header">Добавить пользователя</div>
            
            <input id="search-users-input" 
                   class="add-users-modal__search-users"
                   autocomplete="off" 
                   placeholder="Search">
            
            {{{ foundUserList }}}
            {{{ confirmModal }}}
        </div>
    </div>
`;
