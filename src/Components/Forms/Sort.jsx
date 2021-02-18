import React from "react";
import styled from "styled-components";

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  padding-top: 30px;

  label {
    font-size: 18px;
    font-family: "Sansita Swashed", sans-serif;
    text-shadow: peachpuff 2px 2px;
    font-weight: bold;
  }

  select {
    cursor: pointer;
    font-size: 18px;
    letter-spacing: 0.1px;
    padding: 12px 20px 12px 40px;
    border: 1px solid pink;
    margin: 20px;
    text-align: center;
    box-shadow: 5px 5px peachpuff;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 0px;

    justify-content: center;
    margin: 0px;
  }
`;

const Sort = ({ onChange }) => (
  <StyledSelect>
    <label htmlFor="sort">SORT BY:</label>
    <select onChange={onChange}>
      <option value="name-ascending">Ascending A-Z</option>
      <option value="name-descending">Descending Z-A</option>
    </select>
  </StyledSelect>
);

export default Sort;
