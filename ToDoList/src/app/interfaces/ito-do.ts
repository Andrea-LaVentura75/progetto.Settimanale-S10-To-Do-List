import { Iusers } from './iusers';

export interface ItoDo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
  utenteArray?: Iusers;
}
