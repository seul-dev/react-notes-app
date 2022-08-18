import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import NoteList from '../components/NoteList';

const Main = ({ notes }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <StyledForm>
        <input type='text' placeholder='🔎  search'></input>
      </StyledForm>
      {notes && <NoteList notes={notes} />}
      <StyledFooter>
        <Button
          text='Create Note'
          color='blue'
          onclick={() => navigate('/notes')}
        />
      </StyledFooter>
    </div>
  );
};

export default Main;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
`;

const StyledForm = styled.form`
  width: 100%;
  height: 46px;
  margin-top: 10px;
  input {
    background-color: #e7e7e7;
    border-radius: 10px;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    font-size: 20px;
    padding: 0 20px;
  }
`;
