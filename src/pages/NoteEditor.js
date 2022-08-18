import { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';

const NoteEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const titleRef = useRef();
  const contentRef = useRef();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (title.length < 1) {
      titleRef.current.focus();
    }
    if (content.length < 1) {
      contentRef.current.focus();
    }
    const timestamp = new Date().toLocaleString();

    const note = {
      title,
      content,
      created: timestamp,
    };
    fetch(`http://localhost:3001/note/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    }).then((res) => {
      if (res.ok) {
        navigate('/');
        window.location.reload();
      }
    });
  };

  const handleDelete = () => {
    if (window.confirm('삭제하시겠습니까?')) {
      fetch(`http://localhost:3001/note/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          navigate('/');
          window.location.reload();
        }
      });
    }
  };

  return (
    <div>
      <Header />
      <StyledNav>
        <Button text='Back' color='gray' onclick={() => navigate(-1)} />
      </StyledNav>
      <StyledSection>
        <input
          type='text'
          value={title}
          ref={titleRef}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='title'
        />
        <textarea
          className='content-form'
          type='textarea'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          ref={contentRef}
          placeholder='note content'
        />
      </StyledSection>
      <StyledFooter>
        <Button text='Remove Note' color='red' onclick={handleDelete} />
        <Button text='Done' color='blue' onclick={handleSubmit} />
      </StyledFooter>
    </div>
  );
};

export default NoteEditor;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;

  input,
  textarea {
    font-size: 18px;
    margin-bottom: 20px;
    padding-left: 20px;

    border-radius: 5px;
    background-color: #f9f9f9;
    border: none;
    cursor: pointer;
  }
  input {
    height: 50px;
    margin-top: 10px;
  }
  textarea {
    height: 400px;
    padding-top: 20px;
    padding-bottom: 20px;
    resize: none;
  }
`;
