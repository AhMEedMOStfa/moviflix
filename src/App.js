import './App.css';
import Navbar from './components/navbar/Navbar';
import  Home  from './pages/home/Home';
import {Routes,Route , useLocation} from 'react-router-dom';
import Movies from './pages/movies/Movies';
import Series from './pages/series/Series';
import Anime from './pages/anim/Anime';
import Admin from './pages/admin/Admin';
import Profile from './pages/auth/profile/Profile';
import  HomeContextProvider  from './context/HomeContext';
import  ShowDetailsContextProvider from './context/ShowDetailsContext';
import Details from './pages/details/Details';
import Trailer from './pages/trailer/Trailer';
import {AnimatePresence} from 'framer-motion';
import ModalContextProvider from './context/ModalContext';
import Modal from './components/modal/Modal';
import TrailerContextProvider from './context/TrailerContext';
function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
        <HomeContextProvider>
          <ShowDetailsContextProvider>
           <ModalContextProvider>
            <TrailerContextProvider>
           <Modal/>
            <AnimatePresence mode='wait'>
              <Routes location={location} key={location.key}>
                <Route path='/' element={<Home  />}/>
                <Route path='movies' element={<Movies  />}/>
                <Route path='series' element={<Series  />}/>
                <Route path='anime' element={<Anime  />}/>
                <Route path='admin' element={<Admin  />}/>
                <Route path='profile' element={<Profile  />}/>
                <Route path='showdetails/:mediatype/:id/trailer' element={<Trailer/>}/>
                <Route path='showdetails' element={<Details  />}>
                  <Route path=':mediatype/:id' element={<Details  />}/>
                </Route>
              </Routes>
              </AnimatePresence>
              </TrailerContextProvider>
            </ModalContextProvider>
          </ShowDetailsContextProvider>
       </HomeContextProvider>
      
    </>
  );
}

export default App;
