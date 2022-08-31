import { RouteObject } from 'react-router-dom';
import Lazy from './Lazy';

const ROUTER_CONFIG: RouteObject[] = [
  {
    path: '/',
    element: <Lazy path="/home" />,
  },
  {
    path: '/t',
    element: <Lazy path="/t" />,
  },
  {
    path: '*',
    element: <>404 Not Found!</>,
  },
];

export { ROUTER_CONFIG };
