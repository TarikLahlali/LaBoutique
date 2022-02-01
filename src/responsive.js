import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 685px) {
      ${props}
    }
  `;
};

// export const smallmobile = (props) => {
//   return css`
//     @media only screen and (max-width: 350px) {
//       ${props}
//     }
//   `;
// };

export const medium = (props) => {
  return css`
    @media only screen and (max-width: 950px) {
      ${props}
    }
  `;
};