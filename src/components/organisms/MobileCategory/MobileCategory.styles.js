import styled from "styled-components";
import { breakPoints } from "components/organisms/LoginBody/LoginBody.styles";

export const Container = styled.div`
  .MuiFilledInput-root,
  .MuiFilledInput-root:hover,
  .MuiFilledInput-root.Mui-focused {
    background-color: #c41162;
    border-radius: 0;
  }
  .MuiFilledInput-underline:before,
  .MuiFilledInput-underline:hover:before {
    border-bottom: none;
  }
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiSelect-filled.MuiSelect-filled {
    padding: 1rem;
    color: var(--white-color);
  }
  .MuiSelect-icon {
    color: var(--white-color);
  }
  @media (min-width: ${breakPoints.mobileBreak}) {
    display: none;
  }
`;