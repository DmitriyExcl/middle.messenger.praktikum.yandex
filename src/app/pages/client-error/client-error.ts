/* eslint-disable @typescript-eslint/ban-types */
import View from '../../services/view/view';
import { tmpl } from './client-error.tmpl';
import { router } from '../../services/router/router';
import { Button } from '../../components/button';
import { ROUTE_PAGES } from '../../../configRouting';

export class ClientError extends View<{}, { button: Button }> {
  constructor(props: {}) {
    super('div', props);
  }

  componentDidMount() {
    this.initButton();
  }

  render() {
    return this.compile(tmpl);
  }

  initButton(): void {
    this.children.button = new Button({
      name: 'Вернутся в раздел чатов',
      class: 'client-error__button',
    });

    this.children.button.setProps({
      events: {
        click: () => router.go(ROUTE_PAGES.CHAT),
      },
    });
  }
}
