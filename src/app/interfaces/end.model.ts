export interface endRoot {
    data:    End[];
    status:  number;
    message: null;
}

export interface End {
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