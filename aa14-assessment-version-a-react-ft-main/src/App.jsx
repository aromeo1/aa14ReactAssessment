import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Navigation from "./components/Navigation";
import cats from './mockData/cats.json';
import CatsIndex from './components/CatsIndex';
import CatShow from './components/CatShow';
import CatForm from './components/CatForm';
import PhotoShow from './components/PhotoShow';
import TogglePhotoType from './components/TogglePhotoType';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<CatsIndex cats={cats} />} />
        <Route path="/cats/:catsId" element={<CatShow cats={cats} />} />
        <Route path="/cats/new" element={<CatForm cats={cats} />} />
        <Route path="/photo" element={<PhotoShow />} />
        <Route path="/toggle-photo-type" element={<TogglePhotoType/>} />
        <Route path="*" element={<p>Page Not Found</p>} />
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App;
