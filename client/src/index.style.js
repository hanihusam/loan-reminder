import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
html,
body {
  font-family: 'Montserrat', sans-serif;
  color: #2222;
  background-color: #f5f7fb;
  width: 100%;
  height: 100%;
  font-size: 14px;
  position: relative;
}
#root > div,
#root > section,
#root > header,
#root > footer {
  overflow-x: hidden;
}
#root {
  min-height: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: "Rubik", sans-serif;
  font-weight: 700;
  color: #232323;
  line-height: 1.2;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
a,
a:hover,
a:focus,
a:active,
button,
button:hover {
  text-decoration: none;
  touch-action: manipulation;
  -webkit-transition-duration: 500ms;
  -o-transition-duration: 500ms;
  transition-duration: 500ms;
}
li {
  list-style: none;
}
p,
label {
  font-size: 14px;
  color: #232323;
}
.light {
  color: #767676 !important;
}
`;
