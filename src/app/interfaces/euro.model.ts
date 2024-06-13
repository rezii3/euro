export interface routi {
    data:    Datum[];
    status:  number;
    message: null;
}

export interface Datum {
    id:                number;
    image:             Image;
    title:             string;
    subtitle:          string;
    text:              string;
    publishedAt:       Date;
    estimatedReadTime: number;
    likeCount:         number;
    commentCount:      number;
    bookmarked:        null;
    liked:             null;
    matchLiveStats:    null;
    type:              Tag;
    isEpopPlus:        boolean;
    isFeatured:        null;
    tag:               Tag;
    slug:              string;
    media:             null;
    videoId:           string;
}

export interface Image {
    id:       number;
    fileName: string;
    fileUrl:  string;
}

export interface Tag {
    id:   number;
    name: Name;
}

export enum Name {
    None = "None",
    TheᲡტანდარტულიᲡტატია = "სტანდარტული სტატია",
}



export interface authorsRoot {
    data:          Datum[];
    status:        number;
    currentPage:   number;
    totalPages:    number;
    totalElements: number;
}

export interface Datum {
    id:               number;
    avatar:           Avatar | null;
    firstName:        string;
    lastName:         string;
    subscribed:       boolean;
    subscribersCount: number;
    socials:          Socials;
    about:            string;
    coverImage:       Avatar | null;
    postsCount:       number;
    likesCount:       number;
}

export interface Avatar {
    id:       number;
    fileName: string;
    fileUrl:  string;
}

export interface Socials {
    facebookUrl:  string;
    youtubeUrl:   string;
    instagramUrl: string;
    messengerUrl: null;
    tiktokUrl:    string;
}