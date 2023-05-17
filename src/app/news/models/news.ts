export interface News {
  author: string;
  content: string;
  timestamp: number;
  like?: object;
  comments?: {
    [uid: string]: Comment;
  };
  urlNewsPhoto?: string;
}

// firebase.firestore.Timestamp.fromDate(date)
// firebaseDate.toDate()
