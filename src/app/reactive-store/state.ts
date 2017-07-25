import { User } from './../auth/models/User';

export interface State {
  user: User;
  [key: string]: any
}
