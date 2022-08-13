export const userInfoModalTmpl = `
    <div class="user-info-modal-wrapper"> 
        <div class="user-info-modal"> 
            <div id="user-info-modal-close" class="user-info-modal__close">Закрыть</div>
            
            {{#with userData}}
            <div class="user-info-modal__header">{{ first_name }} {{ second_name }}</div>
            
            <div class="user-info-modal__user-info-wrapper">
                {{#if avatar}}
                <div class="user-info-modal__avatar"> 
                    <img src="https://ya-praktikum.tech/api/v2/resources{{ avatar }}" alt="">
                </div>
                {{else}}
                <div class="user-info-modal__avatar-plug"></div>
                {{/if}}
                
                <div class="user-info-modal__user-info"> 
                    {{#if display_name}}
                    <div>
                        <span class="user-info-modal__label">Имя которое видят пользователи</span>
                        {{ display_name }}
                    </div>
                    {{/if}}
                    <div>
                        <span class="user-info-modal__label">Имя</span>
                        {{ first_name }}
                    </div> 
                    <div>
                        <span class="user-info-modal__label">Фамилия</span>
                        {{ second_name }}
                    </div> 
                    <div>
                        <span class="user-info-modal__label">Логин</span>
                        {{ login }}
                    </div> 
                    <div>
                        <span class="user-info-modal__label">Email</span>
                        {{ email }}
                    </div> 
                    <div>
                        <span class="user-info-modal__label">Телефон</span>
                        {{ phone }}
                    </div> 
                </div>
            </div>
            {{/with}}
        </div>
    </div>
`;
