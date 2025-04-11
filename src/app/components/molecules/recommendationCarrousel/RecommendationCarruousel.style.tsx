import styled from "styled-components";

export const CarrouoselContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem 0;
  scrollbar-width: thin;
  scrollbar-color: rgba(44, 60, 114, 1) #f0f0f0;

  .card {
    display: flex;
    align-items: start;
    min-width: 200px;
    background-color: #fff;
    padding: 0.9rem;
    border-radius: 12px;
    box-shadow: 2px 2px 8px 2px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
    font-size: 0.9rem;
    font-weight: 500;
    .title {
      line-height: 5px;
      font-size: 14px;
      margin-top: 0.5rem;
    }
    .price {
      font-weight: bold;
    }
    .view_detail {
      font-size: 14px;
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      width: 3rem;
      margin-bottom: -1rem;
    }
  }
`;
