import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import LandingPage from './Screens/Landing Page/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MyNotes from './Screens/MyNotes/MyNotes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/mynotes' element={<MyNotes/>}/>
        <Route path='/' element={<LandingPage/>} exact/>
        
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
