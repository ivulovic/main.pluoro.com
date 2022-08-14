import { createContext } from 'react';

export interface IOpenSourceContext {
  implementation: {
    openSource: any;
  };
}

const Context = createContext<IOpenSourceContext>(null);

export default Context;
