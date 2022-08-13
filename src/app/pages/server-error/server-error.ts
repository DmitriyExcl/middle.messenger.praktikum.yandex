import { tmpl } from './server-error.tmpl';
import View from '../../services/view/view';
import { router } from '../../services/router/router';
import { Button } from '../../components/button';
import { ROUTE_PAGES } from '../../../configRouting';

export class ServerError extends View<{}, { button: Button } > {
  constructor(props: { }) {
    super('div', props);
  }

  componentDidMount() {
    this.children.button = new Button({
      name: 'Назад в раздел чатов',
      class: 'server-error__button',
    });

    this.children.button.setProps({
      events: {
        click: () => router.go(ROUTE_PAGES.CHAT),
      },
    });
  }

  render(): DocumentFragment {
    return this.compile(tmpl);
  }
}
