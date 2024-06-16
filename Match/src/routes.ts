import React from 'react';

const Home = React.lazy(() => import('@/pages/home/Home.tsx'));
// const Login = React.lazy(() => import('./pages/Login'));
const SignIn = React.lazy(() => import('./pages/signIn/SignIn.tsx'));
const Favorites = React.lazy(() => import('@/pages/favorites/Favorites.tsx'));
const Archive = React.lazy(() => import('@/pages/archive/Archive.tsx'));
const Ranking = React.lazy(() => import('./pages/ranking/Ranking.tsx'));
const NearBy = React.lazy(() => import('./pages/nearBy/NearBy.tsx'));
const Test = React.lazy(() => import('./pages/matchDetail/MatchDetail.tsx'));
const Login = React.lazy(() => import('./pages/myPage/MyPage.tsx'));
const Block = React.lazy(() => import('./pages/block/Block.tsx'));

const routes = [
  {path: '/', element: Home},
  {path: '/login', element: Login},
  {path: '/signin', element: SignIn},
  {path: '/favorites', element: Favorites},
  {path: '/archive', element: Archive},
  {path: '/ranking', element: Ranking},
  {path: '/nearby', element: NearBy},
  {path: '/test', element: Test},
  {path: '/block', element: Block},
];

export default routes;
