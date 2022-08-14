import { useContext } from 'react';

import useAppImplementation from '@implementation/app';
import useWishlistImplementation from '@implementation/wishlist';
import { useDispatch } from '@service';

import AuthContext from './context';
import scopeSettings, { AppsScope } from './settings';

const useAppController = (scope) => {
  const dispatch = useDispatch();
  const app = useAppImplementation();
  const getPayload = (params: any = null) => ({
    controller: scopeSettings[scope],
    params,
  });
  const onCreate = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.create(payload));
  };
  const onLoadAll = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.loadAll(payload));
  };
  const onLoadById = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.loadById(payload));
  };
  const onRemove = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.remove(payload));
  };

  return {
    controller: scopeSettings[scope],
    implementation: {
      app,
    },
    methods: {
      onCreate,
      onLoadAll,
      onLoadById,
      onRemove,
    },
  };
};

export const useWishlistController = () => {
  const dispatch = useDispatch();
  const scope = useAppController(AppsScope.Wishlist);
  const wishlist = useWishlistImplementation();

  const getPayload = (params: any = null) => ({
    controller: scopeSettings[AppsScope.Wishlist],
    appScope: scope,
    params,
  });

  const onFetch = (params: any) => {
    const payload = getPayload(params);
    dispatch(wishlist.actions.fetch(payload));
  };

  scope.implementation.wishlist = wishlist;
  scope.methods.onFetch = onFetch;

  return scope;
};

const useAppControllerScope = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('You are using AppContext out of AppContext.Provider');
  }
  return ctx;
};

export const useWishlistControllerScope = () => {
  const appScope = useAppControllerScope();
  return appScope;
};
