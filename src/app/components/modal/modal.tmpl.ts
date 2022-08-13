export const modalTmpl = `
    <div>
        <div class="modal">
            <div class="modal__message">
                {{#if target}}
                    {{ message }} <span class="modal__target">{{ target }}</span>?
                {{else}}
                    {{ message }}?
                {{/if}}
            </div>
            
            <div class="modal__buttons">
                {{{ confirm }}}
                {{{ cancel }}}
            </div>
        </div>
        <div></div>
    </div>
`;
