export interface IOpenSourceState {
  //
}

export interface IOpenSourceImplementation {
  actions: typeof import('./service').actions;
  selectors: typeof import('./selectors');
}
