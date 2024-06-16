import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Suspense} from 'react';
import './App.css';
import Home from '@/pages/home/Home.tsx';
import Favorites from '@/pages/favorites/Favorites.tsx';
import Archive from '@/pages/archive/Archive.tsx';
import Ranking from '@/pages/ranking/Ranking.tsx';
import NearBy from '@/pages/nearBy/NearBy.tsx';
import Test from '@/pages/matchDetail/MatchDetail.tsx';
import DefaultLayout from './layout/DefaultLayout.tsx';
import Login from '@/pages/login/Login.tsx';
import MyPage from '@/pages/myPage/MyPage.tsx';
import Block from '@/pages/block/Block.tsx';
import SignInPage from '@/pages/signIn/SignIn.tsx';
import {AuthProvider} from '@/components/auth/AuthProvider.tsx';
import PlaceMatch from '@/pages/placeMatches/PlaceMatch.tsx';
// import { AuthProvider } from "./components/auth/AuthProvider.tsx";

const loading = <div>화면 로딩중...</div>;
// const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
// const Home = React.lazy(() => import("./pages/home/Home"));
// const Favorites = React.lazy(() => import("./pages/favorites/Favorites"));
// const Archive = React.lazy(() => import("./pages/archive/Archive"));
// const Ranking = React.lazy(() => import("./pages/ranking/Ranking"));
// const NearBy = React.lazy(() => import("./pages/nearBy/NearBy"));
// const Login = React.lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path='*' element={<DefaultLayout />}>
              <Route index element={<Home />} />
              <Route path='favorites' element={<Favorites />} />
              <Route path='archive' element={<Archive />} />
              <Route path='ranking' element={<Ranking />} />
              <Route path='nearby' element={<NearBy />} />
              <Route path='test' element={<Test />} />
              <Route path='login' element={<Login />} />
              <Route path='signin' element={<SignInPage />} />
              <Route path='mypage' element={<MyPage />} />
              <Route path='block' element={<Block />} />
              <Route path='places/:placeId/matches' element={<PlaceMatch />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
