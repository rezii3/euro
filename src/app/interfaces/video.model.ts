export interface videoRoot {
    data:    Data;
    status:  number;
    message: null;
}

export interface Data {
    id:                number;
    title:             string;
    description:       string;
    youtubePlaylistId: string;
    imageId:           null;
    image:             null;
    disabled:          boolean;
    isEpopPlus:        boolean;
    createdAt:         Date;
    items:             Item[];
}

export interface Item {
    title:          string;
    thumbnailUrl:   string;
    youtubeVideoId: string;
}