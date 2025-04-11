import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(44, 60, 114, 1) 64%,
    rgba(58, 85, 156, 1) 100%
  );
  height: 5.5rem;
  padding: 2px 10px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 20px;
    background: #fff;
    border-top-left-radius: 100% 20px;
    border-top-right-radius: 0 20px;
  }

  .container_image {
    display: flex;
    color: white;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: -0.8rem;

    img {
      width: 40px;
      margin-right: 10px;
    }

    span {
      font-size: 14px;
    }

    p {
      font-weight: bold;
    }
  }

  .icons {
    margin-top: 1.5rem;

    img {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 10px;
      cursor: pointer;
    }
  }

  .status-indicator {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    color: #fff;
    font-weight: 500;
    margin: 10px 0 0 10px;
  }

  .status-indicator__dot {
    width: 5px;
    height: 5px;
    background-color: #00ff7f;
    border-radius: 50%;
  }

  .status-indicator__text {
    font-size: 12px;
  }
`;