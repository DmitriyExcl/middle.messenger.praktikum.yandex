export const avatarModalTmpl = `
    <div class="c-avatar-modal-wrapper"> 
        <div class="c-avatar-modal">
            <div class="c-avatar-modal__header">Изменить аватар</div>
            
            <input id="{{ inputId }}" class="c-avatar-modal__input" type="file">
            
            <div>
                {{{ confirmBtn }}}
                {{{ cancelBtn }}}
            </div>
        </div>
        <div></div>
    </div>
`;
