import { BlockClass } from "../Core/Block/Block";
import { BrowserRouter } from "../Core/BrowserRouter";

type WithRouterProps = { router: BrowserRouter }

export function withRouter<P extends WithRouterProps>(WrappedBlock: BlockClass<P>) {
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  } as BlockClass<Omit<P, 'router'>>;
}