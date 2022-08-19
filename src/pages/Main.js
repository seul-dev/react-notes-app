import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';
import NoteList from '../components/NoteList';

const Main = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/note/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNotes(data);
      });
    let sortedNotes = notes.slice();
    sortedNotes.sort(
      (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
    );
    setNotes(sortedNotes);
  }, []);

  const handleSearchInput = (e) => {
    setInputValue(e.target.value);
    setNotes(notes.filter((el) => el.title.includes(e.target.value)));
  };

  return (
    <div>
      <Header />
      <StyledForm>
        <input
          type='text'
          placeholder='🔎  search'
          value={inputValue}
          onChange={handleSearchInput}
        ></input>
      </StyledForm>
      <NoteList notes={notes} />
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
