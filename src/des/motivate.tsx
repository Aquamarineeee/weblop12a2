import React from 'react';
import styled from 'styled-components';

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="tooltip-wrapper">
        <button className="hover-me">Hover me! 🎈</button>
        <div className="tooltip">
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          <span className="star">⭐</span>
          Woohoo! You found the secret message! Keep being awesome! 🚀
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    background: linear-gradient(135deg, #ff7eb3, #ffd700);
    font-family: "Poppins", sans-serif;
    color: #333333;
  }

  .tooltip-wrapper {
    position: relative;
    display: inline-block;
  }

  .hover-me {
    padding: 15px 25px;
    background: #6a5acd;
    color: white;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-size: 18px;
    transition:
      transform 0.3s,
      background 0.3s;
    font-family: "Montserrat", sans-serif;
  }

  .hover-me:hover {
    transform: scale(1.1);
    background: #9370db;
  }

  .tooltip {
    visibility: hidden;
    position: absolute;
    bottom: 150%;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    color: #6a5acd;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    width: 220px;
    text-align: center;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    animation: bounce 0.6s infinite alternate;
    font-family: "Roboto", sans-serif;
  }

  .tooltip::before {
    content: "";
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px;
    border-style: solid;
    border-color: white transparent transparent transparent;
  }

  .tooltip::after {
    content: "POW!";
    position: absolute;
    top: -25px;
    right: -25px;
    background: #ff6347;
    color: white;
    padding: 8px 12px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 14px;
    transform: rotate(15deg);
    font-family: "Comic Neue", cursive;
  }

  .tooltip-wrapper:hover .tooltip {
    visibility: visible;
  }

  @keyframes bounce {
    from {
      transform: translateX(-50%) translateY(0px);
    }
    to {
      transform: translateX(-50%) translateY(-10px);
    }
  }

  /* Star decoration */
  .star {
    position: absolute;
    color: #ffd700;
    animation: twinkle 1s infinite alternate;
  }

  .star:nth-child(1) {
    top: -10px;
    left: 10px;
  }
  .star:nth-child(2) {
    top: 10px;
    right: 10px;
  }
  .star:nth-child(3) {
    bottom: -10px;
    left: 30px;
  }

  @keyframes twinkle {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }`;

export default Tooltip;
