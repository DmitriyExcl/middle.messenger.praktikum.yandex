export const chatListTmpl = `
    <div class="chat-list">
        <div class="chat-list__header">
            <div id="setting-icon" class="chat-list__icon setting">Профиль</div>
            <div id="new-chat-icon" class="chat-list__icon new-chat">Создать чат</div>
            <input id="input-search" 
                   autocomplete="off" 
                   placeholder="Поиск" 
                   class="chat-list__search">
        </div>
        
        <div class="chat-list__available-chats">
            {{{ chatCards }}}
        </div>
    </div>
`;
