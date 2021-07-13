import styled from "@emotion/styled/macro";

export const Container = styled.div`
  margin: 0 auto;
  text-align: center;
`;

export const Button = styled.button`
  background: transparent;
  color: #fff;
  border: 3px solid #fff;
  border-radius: 50px;
  padding: 0.8rem 2rem;
  font: 24px "Margarine", sans-serif;
  outline: none;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in-out;
  letter-spacing: 2px;
  animation: jittery 4s infinite;
  &:not(:last-child) {
    margin-right: 40px;
  }
  &:hover {
    animation: heartbeat 0.2s infinite;
    background-color: #ffb005;
  }

  @keyframes jittery {
    5%,
    50% {
      transform: scale(1);
    }
    10% {
      transform: scale(0.9);
    }
    15% {
      transform: scale(1.15);
    }
    20% {
      transform: scale(1.15) rotate(-5deg);
    }
    25% {
      transform: scale(1.15) rotate(5deg);
    }
    30% {
      transform: scale(1.15) rotate(-3deg);
    }
    35% {
      transform: scale(1.15) rotate(2deg);
    }
    40% {
      transform: scale(1.15) rotate(0);
    }
  }
  @keyframes heartbeat {
    50% {
      transform: scale(1.1);
    }
  }
`;
