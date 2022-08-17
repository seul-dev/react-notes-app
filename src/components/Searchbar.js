import styled from 'styled-components';
const Searchbar = () => {
  return (
    <StyledForm>
      <input type='text' placeholder='🔎  search'></input>
    </StyledForm>
  );
};

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

export default Searchbar;
