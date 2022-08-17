import { render } from "@testing-library/react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.lightGray};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.smalltext};
  padding: 5px 10px;
  border-style: solid;
  border-width: 2px;
  border-radius: 3px;
  margin: 2%;
`;

const RedButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.red};
  border-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
`;

const GreenButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.green};
  border-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
`;

const BlueButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.blue};
  border-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
`;
// render(
//   <div>
//     <ThemeProvider theme={theme}>
//       <Button>Cancel</Button>
//       <BlueButton>Primary Action</BlueButton>
//       <RedButton>Discard</RedButton>
//       <GreenButton>Got it</GreenButton>
//     </ThemeProvider>
//   </div>
// );

export { Button, RedButton, GreenButton, BlueButton };
