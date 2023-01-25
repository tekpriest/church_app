import assets from './assets';
import { Church, DailyText, Event, ILatest } from './interface';

export const churches: Church[] = [
  {
    image: '',
    location: 'Serilingampalle HYD, 500019',
    name: 'Good Shepherd Evangelical Church',
    times: ['12:00pm - 3:30pm'],
    isFavorite: false,
    memberCount: 37,
    about:
      'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  },
  {
    image: '',
    name: 'Christ Gospel Church',
    about: '',
    memberCount: 30,
    isFavorite: true,
    location: 'Gulmohar Park HYD, 500041',
    times: ['6pm - 7pm'],
  },
  {
    image: '',
    name: 'Jesus Christ Gospel Church',
    about: '',
    memberCount: 30,
    isFavorite: true,
    location: 'Gulmohar Park HYD, 500050',
    times: ['10:15am - 12:00pm'],
  },
];

export const daily: DailyText[] = [
  {
    text: 'The wicked flee when no one is pursuing, but the righteous are bold as a lion',
    verse: 'Proverbs 28:1',
  },
];

export const events: Event[] = [
  {
    times: [
      {
        name: 'Event Name',
        open: '09:30',
        close: '10:00',
      },
      {
        name: 'Event Name',
        open: '10:00',
        close: '10:30',
      },
      {
        name: 'Event Name',
        open: '11:00',
        close: '11:40',
      },
    ],
    date: '17 September',
    time: 'Morning',
  },
  {
    times: [
      {
        name: 'Event Name',
        open: '09:30',
        close: '10:00',
      },
      {
        name: 'Event Name',
        open: '10:00',
        close: '10:30',
      },
      {
        name: 'Event Name',
        open: '11:00',
        close: '11:40',
      },
    ],
    date: '21 September',
    time: 'Morning',
  },
];

export const latest: ILatest[] = Array.from({ length: 4 }).map(
  (_, i) => {
    return {
      id: i,
      image: `https://picsum.photos/seed/${i}/1920/1080?blur=4`,
      title: 'Raise Hand For Church',
    };
  },
);
