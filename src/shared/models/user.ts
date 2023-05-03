export interface User {
  $email: string;
  userName: string;
  password: string;
  birthday: Date;
  city: string;
  sudscribe: object;
  urlUserPhoto?: string;
}
// firebase.firestore.Timestamp.fromDate(date)
// firebaseDate.toDate()
