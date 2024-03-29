export const editUsersModalTmpl = `
    <div class="edit-users-modal-wrapper">
        <div class="edit-users-modal">
            <div id="add-users-icon" class="edit-users-modal__add-user-icon">Добавить</div>
            <div id="edit-users-modal-close" class="edit-users-modal__close-modal-icon">Закрыть</div>
            
            <div class="edit-users-modal__header">Чат</div>
                 
            <div class="edit-users-modal__users-list">
                {{#each chatUsers}}
                    <div id="{{ id }}" class="user-card">
                        <div class="user-card__avatar">
                            {{#if avatar}}
                            <img src="https://ya-praktikum.tech/api/v2/resources{{ avatar }}" alt="">
                            {{/if}}
                        </div>
                        
                        <div>
                            <div class="user-card__name">{{ first_name }} {{ second_name }}</div>
                            <div class="user-card__login">{{ login }}</div>
                        </div>
                        
                        <div id="chat-remove-user" class="user-card__remove-user">Удалить</div>
                    </div>
                {{/each}}
            </div>
        </div>
        {{{ confirmModal }}}
        {{{ addUsersModal }}}
    </div>
`;
