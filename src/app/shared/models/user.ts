export interface User {
  uid: string;
  email: string;
  displayName: string;
  aboutMe?: string;
  dateBth?: number;
  photoURL?: string;
  subscribe?: object;
  //subscribe: {[uid: string]: boolean;}
}
