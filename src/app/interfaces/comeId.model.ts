export interface IdCome {
    data: Data;
    status: number;
    message: null;
}

export interface Data {
    id: number;
    image: FbImage;
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
    author: Author;
    coAuthor: null;
    categories: Category[];
    modules: Module[];
    fbImage: FbImage;
    nextPostId: number;
    videoId: string;
}

export interface Author {
    id: number;
    avatar: FbImage;
    firstName: string;
    lastName: string;
    subscribed: boolean;
    subscribersCount: number;
    socials: Socials;
    about: string;
}

export interface FbImage {
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

export interface Category {
    id: number;
    name: string;
    slug: string;
}

export interface Module {
    type: string;
    text?: string;
    galleryType?: string;
    items?: Item[];
}

export interface Item {
    imageId: number;
    image: FbImage;
    description: string;
    author: string;
}

export interface Tag {
    id: number;
    name: string;
}