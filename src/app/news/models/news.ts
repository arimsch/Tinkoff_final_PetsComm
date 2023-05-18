export interface News {
  uid: string;
  author: string;
  content: string;
  timestamp: number;
  likes?: object;
  comments?: {
    [uid: string]: Comment;
  };
  urlNewsPhoto?: string;
}

// firebase.firestore.Timestamp.fromDate(date)
// firebaseDate.toDate()
