export interface User {
  uid: string;
  email: string;
  displayName: string;
  about?: string;
  photoURL?: string;
  subscribe?: object;
  //subscribe: {[uid: string]: boolean;}
}
