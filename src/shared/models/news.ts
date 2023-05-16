export interface News {
  $id: string;
  author: string;
  content: string;
  like: object;
  timestamp: number;
  urlNewsPhoto?: string;
}

// firebase.firestore.Timestamp.fromDate(date)
// firebaseDate.toDate()
