import { Action } from './constants/interface';
import FindChurch from './screens/FindChurch';
import Home from './screens/Home';

export const Routes: Action[] = [
  {
    image: '',
    title: 'Find The Church',
    routeName: 'SearchChurch',
    component: FindChurch,
  },
  {
    image: '',
    title: 'Home',
    routeName: 'Home',
    component: Home,
  },
];
