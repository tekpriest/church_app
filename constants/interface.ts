export interface Sermon {
  id: string;
  title: string;
  message: string;
  creator: string;
  image?: string;
}

export interface Media {
  type: string;
  url: string;
}

export interface Church {
  image: string;
  location: string;
  name: string;
  times: string[];
  memberCount: number;
  about: string;
  sermons?: Sermon[];
  media?: Media[];
  isFavorite: boolean;
}

export interface Event {
  times: {
    name: string;
    open: string;
    close: string;
  }[];
  date: string;
  time: string;
}

export interface DailyText {
  text: string;
  verse: string;
}

export interface Action {
  image: string;
  title: string;
  routeName: string;
  component: any;
}

export interface ILatest {
  id: number;
  image: string;
  title: string;
}
