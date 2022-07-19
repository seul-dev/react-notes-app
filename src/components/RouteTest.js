import { Link } from 'react-router-dom';
import Main from '../pages/Main';
import CreateNote from '../pages/CreateNote';

const RouteTest = () => {
  return (
    <>
      <Link to='/' element={<Main />}>
        Main
      </Link>
      <br />
      <Link to='/createnote' element={<CreateNote />}>
        Create Note
      </Link>
    </>
  );
};

export default RouteTest;
