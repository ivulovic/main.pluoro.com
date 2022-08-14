import { useContext } from 'react';

import useOpenSourceImplementation from '@implementation/open-source';
import { OpenSourceScope } from '@implementation/open-source/settings';
import { useDispatch } from '@service';

import Context from './context';
import scopeSettings from './settings';

const useOpenSourceController = (scope) => {
  const dispatch = useDispatch();
  const openSource = useOpenSourceImplementation();
  const getPayload = (params: any = null) => ({
    controller: scopeSettings[scope],
    params,
  });
  const onLoad = (params: any) => {
    const payload = getPayload(params);
    dispatch(openSource.actions.load(payload));
  };

  return {
    controller: scopeSettings[scope],
    implementation: {
      openSource,
    },
    methods: {
      onLoad,
    },
  };
};

export const useAirQualityController = () => {
  const scope = useOpenSourceController(OpenSourceScope.Sepa);
  return scope;
};
export const useCovidController = () => {
  const scope = useOpenSourceController(OpenSourceScope.Covid);
  return scope;
};

const useOpenSourceControllerScope = () => {
  const ctx = useContext(Context);
  if (!ctx) {
    throw new Error('You are using OpenSourceContext out of OpenSourceContext.Provider');
  }
  return ctx;
};

export const useAirQualityControllerScope = useOpenSourceControllerScope;
export const useCovidControllerScope = useOpenSourceControllerScope;
