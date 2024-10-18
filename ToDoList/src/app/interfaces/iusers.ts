import { ItoDo } from './ito-do';
export interface Iusers {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  tasks?: ItoDo[];
}
