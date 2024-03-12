import Game from './components/Game';
import SplashScreen from './pages/splash-screen';

const routes = [
  {
    path: '/',
    element: <SplashScreen />,
  },
  {
    path: '/game',
    element: <Game />,
  },
];

export default routes;
