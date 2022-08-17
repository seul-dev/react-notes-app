import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Notes from '../pages/Notes';

const NoteList = ({ notes }) => {
  return (
    <StyledList>
      {notes.map((note) => (
        <div className='note-preview' key={note.id}>
          <Link to={`/notes/${note.id}`}>
            <h3>{note.title}</h3>
            <p>{note.created}</p>
          </Link>
        </div>
      ))}
    </StyledList>
  );
};

export default NoteList;

const StyledList = styled.div`
  height: 500px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  .note-preview {
    margin: 5px 0;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding-left: 20px;
    a {
      color: #797979;
      text-decoration: none;
    }
    :hover {
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
    p {
      font-size: 14px;
    }
  }
`;
