// 글로벌 스타일 만들기 위해서 import
import { createGlobalStyle } from "styled-components";
// 스타일 초기화를 위해 reset 불러오기
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
 ${reset}
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video,button
{
margin: 0;
padding: 0;
font-style: normal;
vertical-align: baseline;
font-size: 100%;
border: 0;
}
*::-webkit-scrollbar-track , .modal_container::-webkit-scrollbar-track {background-color: rgba(0,0,0,.1); border-radius:10px; margin-top:5px; margin-bottom:0; }
*::-webkit-scrollbar , .modal_container::-webkit-scrollbar { width: 5px;  background-color: #fff;margin-top:20px; margin-bottom:20px;}
*::-webkit-scrollbar-thumb , .modal_container::-webkit-scrollbar-thumb { background-color: #717171; border-radius:10px; margin-top:20px; margin-bottom:20px;}
*:focus { outline:none; }
* {
box-sizing:border-box;
-webkit-box-sizing:border-box;
-moz-box-sizing: border-box;
-webkit-tap-highlight-color: rgba(255,255,255,0);
}
body {
width: 100%;
min-width: 280px;
height: auto;
line-height: 1;
font-size: 15px !important;
color: #000000;
background-color: #ffffff;
}
img {
max-width: 100%;
vertical-align: top;
height: auto !important;
}
ol, ul, li {
list-style: none;
}
table {
border-collapse: collapse;
border-spacing: 0;
}
hr {
display: block;
margin: 16px 0;
padding: 0;
height: 1px;
border: 0;
border-top: 1px solid #ccc;
}
button {
outline: none;
cursor: pointer;
}
i {
cursor: pointer;
}
/* input style */
input::-ms-clear,input::-ms-reveal {display: none; width : 0; height: 0;}
input::-webkit-search-decoration,input::-webkit-search-cancel-button,input::-webkit-search-results-button,input::-webkit-search-results-decoration{ display: none; }
input, select,textarea {vertical-align: middle;-webkit-appearance: none;-webkit-border-radius: 0;}
/* Change the color to your own background color */
input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active {transition: background-color 5000s ease-in-out 0s;-webkit-transition: background-color 9999s ease-out;-webkit-box-shadow: 0 0 0px 1000px white inset !important;-webkit-text-fill-color: #545454 !important;}
select {
cursor: pointer;
}
a {
text-decoration:none;
color: inherit;
cursor: pointer;
display: inline-block;
}
/* hiding */
.readable-hidden, .a11y, legend {
position: absolute;
width: 1px;
height: 1px;
overflow: hidden;
margin: -1px;
clip: rect(0, 0, 0, 0);
}
/* font-reset */
/* h1,h2,h3,h4,h5,h6 {
font-weight: normal !important;
} */
`;

export default GlobalStyles;
