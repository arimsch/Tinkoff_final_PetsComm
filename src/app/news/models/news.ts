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
