import Block from '../Core/Block/Block';
import './style.scss';

interface ErrorsProps {
    errorText: string;
}

export class ErrorsPage extends Block {
  constructor(props: ErrorsProps) {
    super({ ...props });
  }

  render() {
    return `
            <div>
                {{errorText}}
                {{{Link text="Назад" to="/"}}}
            </div>
        `;
  }
}
