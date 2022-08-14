export interface IAppState {
  loading: Record<string, boolean>;
  error: Record<string, null | any>;
  data: Record<string, any>;
}

export interface IAppImplementation {
  actions: typeof import('./service').actions;
  selectors: typeof import('./selectors');
}
