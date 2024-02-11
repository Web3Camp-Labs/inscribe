import styled from "styled-components";

export default function Loading() {
  return (
      <LoadingBox>
          <div className="rainbow">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          </div>
      </LoadingBox>

  );
}

const LoadingBox = styled.div`

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 99;
    backdrop-filter: blur(4px);
  background: rgba(255,255,255,0.4);

    .rainbow {
        width: 20em;
        height: 10em;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .rainbow span {
        position: absolute;
        box-sizing: border-box;
        width: calc(100% - 2em * (var(--n) - 1));
        height: calc(200% - 2em * (var(--n) - 1));
        border: 1em solid;
        border-top-color: transparent;
        border-left-color: transparent;
        border-radius: 50%;
        transform: translateY(5em) rotate(225deg);
        animation: rotating 2s infinite;
        animation-delay: calc(-0.05s * var(--n));
    }

    .rainbow span:nth-child(1) {
        --n: 1;
        color: #ff759c;
    }

    .rainbow span:nth-child(2) {
        --n: 2;
        color: #ffaa00;
    }

    .rainbow span:nth-child(3) {
        --n: 3;
        color: #fdec6e;
    }

    .rainbow span:nth-child(4) {
        --n: 4;
        color: #83ff95;
    }

    .rainbow span:nth-child(5) {
        --n: 5;
        color: #44bcfc;
    }

    .rainbow span:nth-child(6) {
        --n: 6;
        color: #9c70fa;
    }

    @keyframes rotating {
        0%, 20% {
            transform: translateY(5em) rotate(225deg);
        }

        80%, 100% {
            transform: translateY(5em) rotate(calc(225deg + 360deg));
        }
    }



`;
