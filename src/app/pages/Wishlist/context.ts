import { createContext } from 'react';

interface IWishlistContext {
  implementation: {};
}

const Context = createContext<IWishlistContext>(null);

export default Context;
