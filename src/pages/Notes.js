import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';
import Header from '../components/Header';

const Notes = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <StyledNav>
        <Button text='Back' color='gray' onclick={() => navigate(-1)} />
      </StyledNav>

      <p>노트 작성, 수정 페이지</p>
      <StyledFooter>
        <Button
          text='Remove Note'
          color='red'
          onclick={() => alert('remove')}
        />
        <Button text='Done' color='blue' onclick={() => alert('done')} />
      </StyledFooter>
    </div>
  );
};

export default Notes;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-start;
`;
