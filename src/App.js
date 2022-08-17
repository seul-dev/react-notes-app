import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Notes from './pages/Notes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/notes/:id' element={<Notes />} />
          <Route path='/notes' element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
