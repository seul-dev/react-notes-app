import styled, { css, ThemeProvider } from 'styled-components';
import { darken } from 'polished';

const Button = ({ text, color, onclick }) => {
  return (
    <ThemeProvider
      theme={{
        palette: {
          red: '#E74C3C',
          blue: '#3498DB',
          gray: '#C5C5C5',
        },
      }}
    >
      <StyledButton className={'Button'} onClick={onclick} color={color}>
        {text}
      </StyledButton>
    </ThemeProvider>
  );
};
Button.defaultProps = {
  color: 'gray',
};
export default Button;

const colorStyles = css`
  ${(props) => {
    const selected = props.theme.palette[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
`;

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  margin-top: 10px;
  white-space: nowrap;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  color: white;
  ${colorStyles}
`;
