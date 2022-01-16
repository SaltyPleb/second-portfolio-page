import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import styled, { keyframes } from "styled-components";

const ProgressBar = (props) => {
  const { bgcolor, completed, ball } = props;

  const ProgressStyle = styled.div`
    background: rgba(255, 255, 255, 0.1);
    align-items: center;
    justify-content: flex-start;
    border-radius: 100px;
    position: relative;
    padding: 0 5px;
    display: flex;
    height: 20px;
    width: 330px;
  `;

  const fillProgress = keyframes`
  from {
    width: 0%;
  }

  to {
    width: ${completed}%;
  }
`;

  const ProgressValueStyle = styled.div`
    position: relative;
    box-shadow: 0 10px 40px -10px #fff;
    border-radius: 100px;
    background: ${bgcolor};
    height: 15px;
    animation: ${fillProgress} 3s forwards;
  `;

  const ProgressCircleStyle = styled.div`
    position: relative;
    width: 1px;
  `;

  const SicStyle = styled.div`
    position: relative;
    background: white;
    border-radius: 100px;
    height: 20px;
    width: 20px;
    left: -15px;
  `;

  return ball ? (
    <ProgressStyle>
      <ProgressValueStyle />
      {/* <input type="range" min="1" max="100"></input> */}
      <ProgressCircleStyle>
        <SicStyle />
      </ProgressCircleStyle>
    </ProgressStyle>
  ) : (
    <ProgressStyle>
      <ProgressValueStyle></ProgressValueStyle>
    </ProgressStyle>
  );
};

export default ProgressBar;
