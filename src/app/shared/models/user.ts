export interface User {
  uid: string;
  email: string;
  displayName: string;
  aboutMe?: string;
  dateBth?: number;
  photoURL?: string;
  news?: object;
  comments?: object;
  subscribe?: object;
  //subscribe: {[uid: string]: true;}
}
