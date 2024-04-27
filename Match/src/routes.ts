import React from 'react';

const Home = React.lazy(() => import('@/pages/home/Home.tsx'));
// const Login = React.lazy(() => import('./pages/Login'));
// const SignIn = React.lazy(() => import('./pages/SignIn'));
const Favorites = React.lazy(() => import('@/pages/favorites/Favorites.tsx'));
const Archive = React.lazy(() => import('@/pages/archive/Archive.tsx'));
const Ranking = React.lazy(() => import('./pages/ranking/Ranking.tsx'));
const NearBy = React.lazy(() => import('./pages/nearBy/NearBy.tsx'));

const routes = [
  {path: '/', element: Home},
  // { path: '/login', element: Login },
  // { path: '/signIn', element: SignIn },
  {path: '/favorites', element: Favorites},
  {path: '/archive', element: Archive},
  {path: '/ranking', element: Ranking},
  {path: '/nearby', element: NearBy},
];

export default routes;
