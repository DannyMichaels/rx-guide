import styled from "styled-components";

const MoveInLeft = styled.div`
  animation-name: moveInLeft;
  animation-duration: 1.6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-out;
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }
    80% {
    }

    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
`;

export default MoveInLeft;
