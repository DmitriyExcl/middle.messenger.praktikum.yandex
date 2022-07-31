import { ROUTE_PAGES } from '../../configRouting';
import Block from '../../Core/Block/Block';
import { withRouter, withStore } from '../../Utils';

export class ChatPage extends Block {
  protected getStateFromProps() {
    this.state = {
      values: {
        message: '',
      },
      _sendMessage: () => {
        const messageData = {
          message: (this.refs.message.firstElementChild as HTMLInputElement)
            .value,
        };

        const compliteState = {
          values: { ...messageData },
        };

        this.setState(compliteState);

        console.log('chat-state', messageData);
      },
    };
  }

  render() {
    const { values } = this.state;
    return `
            <div class="chat">
                <div class="chat__user">
                    <div class="chat__user_search">
                        <div>
                        {{{Button
                          to="${ROUTE_PAGES.PROFILE}"
                          text="Профиль"
                        }}}
                        </div>
                        {{{Input
                        type="text"
                        placeholder="Поиск"
                        }}}
                    </div>
                </div>


                <div class="chat__messages">
                    <div class="chat__messages_user">
                        <div>
                            <div>

                            </div>
                            <div class="chat__messages_user-info_name">
                                Вадим
                            </div>
                        </div>
                        <div class="chat__messages_user-actions">
                            {{{Button
                             text="..."
                            }}}
                        </div>
                 
                    </div>
                    <hr/>


                    
                    
                    <div class="chat__messages_content">
                        <p>Привет! Смотри, тут всплыл интересный кусок лунной космической истории</p>
                    </div>
                    <hr/>
                    <div class="chat__messages_entry">
                    
                        {{{Button
                                text="..."
                                onClick=_sendMessage
                        }}}
                        {{{Input
                                value="${values.message}"
                                ref="message"
                                id="message"
                                type="text"
                                placeholder="Сообщение"
                        }}}
                        {{{Button
                                text="Отправить"
                                onClick=_sendMessage
                        }}}
                    </div>
                   
                </div>
            </div>

            </div>
            </div>
        `;
  }
}

export default withRouter(withStore(ChatPage));
