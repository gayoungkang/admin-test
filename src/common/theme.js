import styled from "styled-components";

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

// font size를 객체로 반환해주자.
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
  smalltext: pixelToRem(14),
};

// 자주 사용하는 색을 객체로 만들자.
const colors = {
  white: "#ffffff",
  black: "#000000",
  gray: "#7c7c7c",
  lightGray: "#e6e6e6",
  green: "#208526",
  lightGreen: "#d9f0da",
  blue: "#146ee9",
  lightBlue: "#d9e4f2",
  red: "#d41008",
  lightRed: "#f5dee0",
};

// 자주 사용하는 스타일 속성을 theme으로 만들어보자.
const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
  flexSpaceAround: `
    display: flex;
    justify-content: space-around;
    align-items: center;
  `,
  flexSpaceBetween: `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  flexEnd: `
  display: flex;
  justify-content: end;
  align-items: center;
`,
};

// theme 객체에 감싸서 반환한다.
const theme = {
  fontSizes,
  colors,
  common,
};

export default theme;
