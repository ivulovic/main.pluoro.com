import { createContext } from 'react';

interface IHomeContext {
  implementation: {};
}

const Context = createContext<IHomeContext>(null);

export default Context;
