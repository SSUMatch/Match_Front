import {BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import './App.css';
import Home from '@/pages/home/Home.tsx';
import Favorites from '@/pages/favorites/Favorites.tsx';
import Archive from '@/pages/archive/Archive.tsx';
import Ranking from '@/pages/ranking/Ranking.tsx';
import NearBy from '@/pages/nearBy/NearBy.tsx';
// import { AuthProvider } from "./components/auth/AuthProvider.tsx";

const loading = <div>화면 로딩중...</div>;
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
// const Home = React.lazy(() => import("./pages/home/Home"));
// const Favorites = React.lazy(() => import("./pages/favorites/Favorites"));
// const Archive = React.lazy(() => import("./pages/archive/Archive"));
// const Ranking = React.lazy(() => import("./pages/ranking/Ranking"));
// const NearBy = React.lazy(() => import("./pages/nearBy/NearBy"));
// const Login = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='archive' element={<Archive />} />
            <Route path='ranking' element={<Ranking />} />
            <Route path='nearby' element={<NearBy />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
