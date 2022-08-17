import { render } from "@testing-library/react";
import styled, { ThemeProvider } from "styled-components";
import theme from "./theme";
import { Button, RedButton, GreenButton, BlueButton } from "./buttons";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdatesOutlined";
import { style } from "@mui/system";

const Alert = styled.div`
  width: 380px;
  height: auto;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray};
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 3px 7px 17px #06083b33;
`;

const AlertHeader = styled.div`
  width: 100%;
  height: 45px;
  ${({ theme }) => theme.common.flexSpaceBetween};
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.lightGray};
  p {
    ${({ theme }) => theme.fontSizes.smalltext};
    font-weight: 800;
  }
  svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
  }
`;

const AlertBody = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.common.flexSpaceAround};
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
  svg {
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin: 5%;
  }
  div {
    h1 {
      font-weight: 800;
      margin-bottom: 3%;
      font-size: ${({ theme }) => theme.fontSizes.paragraph};
    }
    p {
      font-size: ${({ theme }) => theme.fontSizes.smalltext};
      line-height: 1.2;
    }
  }
`;

const ButtonsWrap = styled.div`
  ${({ theme }) => theme.common.flexEnd};
`;

render(
  <div>
    <ThemeProvider theme={theme}>
      <Alert>
        <AlertHeader>
          <p>Dialopd default</p>
          <CloseIcon />
        </AlertHeader>
        <AlertBody>
          <TipsAndUpdatesIcon />
          <div>
            <h1>Tip of the day</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque quam perspiciatis labore corporis exercitationem, beatae
            </p>
          </div>
        </AlertBody>
        <ButtonsWrap>
          <Button>Cancel</Button>
          <BlueButton>Primary Action</BlueButton>
        </ButtonsWrap>
      </Alert>

      <Alert>
        <AlertHeader>
          <p>Dialopd default</p>
          <CloseIcon />
        </AlertHeader>
        <AlertBody>
          <TipsAndUpdatesIcon />
          <div>
            <h1>Tip of the day</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              neque quam perspiciatis labore corporis exercitationem, beatae
            </p>
          </div>
        </AlertBody>
        <ButtonsWrap>
          <Button>Cancel</Button>
          <BlueButton>Primary Action</BlueButton>
        </ButtonsWrap>
      </Alert>
    </ThemeProvider>
  </div>
);

export default Alert;
