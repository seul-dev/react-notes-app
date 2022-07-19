import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import CreateNote from './pages/CreateNote';
import RouteTest from './components/RouteTest';

//components
import Button from './components/Button';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Button text={'Create Note'} onclick={() => alert('clicked')} />
        <Button
          text={'Create Note'}
          onclick={() => alert('clicked')}
          color={'blue'}
        />
        <Button
          text={'Create Note'}
          onclick={() => alert('clicked')}
          color={'red'}
        />
        <h1>App</h1>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/createnote/:id' element={<CreateNote />} />
          <Route path='/createnote' element={<CreateNote />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
