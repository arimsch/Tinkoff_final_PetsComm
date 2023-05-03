export interface News {
  $id: string;
  author: string;
  content: string;
  like: object;
  timestamp: number;
  urlNewsPhoto?: string;
}
