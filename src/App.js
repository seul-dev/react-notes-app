import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NoteEditor from './pages/NoteEditor';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/notes/:id' element={<NoteEditor />} />
          <Route path='/notes' element={<NoteEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
