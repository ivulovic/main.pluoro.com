export interface IAuthenticatedUser {
  username: string;
  gender: string;
  avatar: string;
  coins: number;
  authority: number;
  email: string;
  firstName: string;
  lastName: string;
}
export interface IAuthState {
  loading: boolean;
  isLoggedIn: boolean;
  user: IAuthenticatedUser;
  appStatus: AppStatusEnum;
  error: null | any;
}

export const enum AppStatusEnum {
  Ready,
  NotReady,
}

export interface IAuthImplementation {
  actions: typeof import('./service').actions;
  selectors: typeof import('./selectors');
}
