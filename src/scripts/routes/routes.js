import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import HomeList from '../views/pages/homeList';

const routes = {
  '/': HomeList,
  '/home': HomeList,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
