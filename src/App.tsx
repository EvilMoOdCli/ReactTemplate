import { useRoutes } from 'react-router-dom';
import { ROUTER_CONFIG } from './routes/router';

export default function App() {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return appRoutesElement;
}
