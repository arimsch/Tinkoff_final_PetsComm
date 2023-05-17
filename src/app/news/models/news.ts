export interface News {
  author: string;
  content: string;
  timestamp: number;
  like?: object;
  comments?: object;
  urlNewsPhoto?: string;
}

// firebase.firestore.Timestamp.fromDate(date)
// firebaseDate.toDate()
