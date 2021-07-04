export interface Article {
  publishedAt: string,
  title: string,
  description: string,
  image: string,
  url: string
}

export interface Response<T> {
  results: Array<T>;
}
