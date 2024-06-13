export interface newsroot {
  data: Data;
  status: number;
  message: null;
}

export interface Data {
  posts: Post[];
  authors: Author[];
  interests: Interest[];
}

export interface Author {
  id: number;
  avatar: Image | null;
  firstName: string;
  lastName: string;
  subscribed: boolean;
  subscribersCount: number;
  socials?: Socials;
  about?: string;
}

export interface Image {
  id: number;
  fileName: string;
  fileUrl: string;
}

export interface Socials {
  facebookUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  messengerUrl: null;
  tiktokUrl: string;
}

export interface Interest {
  id: string;
  name: string;
  image: Image | null;
  subscriptionsCount: number;
  subscribed: boolean;
}

export interface Post {
  id: number;
  image: Image;
  title: string;
  subtitle: string;
  text: string;
  publishedAt: Date;
  estimatedReadTime: number;
  likeCount: number;
  commentCount: number;
  bookmarked: null;
  liked: null;
  matchLiveStats: null;
  type: Tag;
  isEpopPlus: boolean;
  isFeatured: null;
  tag: Tag;
  slug: string;
  media: null;
  author: Author | null;
  coAuthor: null;
  videoId: string;
  timeSincePublished: string;
}

export interface Tag {
  id: number;
  name: Name;
}

export enum Name {
  None = "None",
  TheᲡტანდარტულიᲡტატია = "სტანდარტული სტატია",
}
