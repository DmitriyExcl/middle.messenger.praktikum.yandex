import View from '../../services/view/view';
import { loaderTmpl } from './loader.tmpl';
import { render } from '../../utils/renderDOM';

class Loader extends View<{ }, { } > {
  constructor(props: {}) {
    super('div', props);
  }

  componentDidMount() {
    this.getContent().classList.add('c-loader-wrapper');
    this.hide();
  }

  render(): DocumentFragment {
    return this.compile(loaderTmpl);
  }
}

export const loader = new Loader({});

render('#app', loader);
