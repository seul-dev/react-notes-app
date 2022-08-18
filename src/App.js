import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import NoteEditor from './pages/NoteEditor';
import useFetch from './util/useFetch';

function App() {
  const notes = useFetch('http://localhost:3001/note/');

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main notes={notes} />} />
          <Route path='/notes/:id' element={<NoteEditor />} />
          <Route path='/notes' element={<NoteEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
