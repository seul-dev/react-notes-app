import styled from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Notes</h1>
      <p>Make your note!</p>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 20px;
`;
