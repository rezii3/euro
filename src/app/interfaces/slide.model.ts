export interface slideRout {
    data:    Slide[];
    status:  number;
    message: null;
}

export interface Slide {
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
    author:            Author;
    coAuthor:          null;
    videoId:           string;
}

export interface Author {
    id:               number;
    avatar:           Image;
    firstName:        string;
    lastName:         string;
    subscribed:       boolean;
    subscribersCount: number;
    socials:          Socials;
    about:            string;
}

export interface Image {
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

export interface Tag {
    id:   number;
    name: Name;
}

export enum Name {
    None = "None",
    TheᲐნალიტიოკურიᲡტატია = "ანალიტიოკური სტატია",
}