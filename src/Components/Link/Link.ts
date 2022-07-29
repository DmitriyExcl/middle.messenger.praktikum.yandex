import Block from '../../Core/Block/Block';

interface LinkProps {
    text: string;
    to: string;
}

export class Link extends Block {
    public static  componentName = 'Link';

    constructor(props: LinkProps) {
    super({ ...props });
  }

  render() {
    return `<a href="{{to}}">{{text}}</a>`;
  }
}
