import { BlockClass } from '../Core/Block/Block';

type WithIsLoading = {
  isLoading: boolean;
}

export function withIsLoading<P extends WithIsLoading>(WrappedBlock: BlockClass<P>) {
  return class extends WrappedBlock<P> {
    public static componentName = WrappedBlock.componentName || WrappedBlock.name;

    constructor(props: P) {
      super({ ...props, isLoading: () => window.store.getState().isLoading });
    }
  } as BlockClass<Omit<P, 'isLoading'>>;
}
