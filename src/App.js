import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Notes from './pages/Notes';
import { useState, useEffect } from 'react';

function App() {
  const [notes, setNotes] = useState(null);
  const getData = async () => {
    await fetch('http://localhost:3001/note/')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Main notes={notes} />} />
          <Route path='/notes/:id' element={<Notes />} />
          <Route path='/notes' element={<Notes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
