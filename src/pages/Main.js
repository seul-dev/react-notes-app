import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Searchbar from '../components/Searchbar';
import Button from '../components/Button';
import Header from '../components/Header';
const Main = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Searchbar />
      <p>main page</p>
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
`;
