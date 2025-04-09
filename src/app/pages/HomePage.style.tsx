import styled from "styled-components";

export const ContainerChat = styled.section`
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(6, 1fr);
  grid-auto-rows: unset;
  grid-gap: 16px;
  padding: 0 16px;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 24px;
    padding: 0 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 32px;
    padding: 0 32px;
  }

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 2 / 6;
    font-size: 24px;

    @media (min-width: 768px) {
      grid-column: 1 / 9;
    }

    @media (min-width: 1280px) {
      grid-column: 2 / 12;
      font-size: 36px;
    }
  }
`;
