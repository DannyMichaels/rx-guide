import React, { useState } from "react";
import styled from "styled-components";
import OpenedNav from "./OpenedNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 999;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  &:hover {
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    box-shadow: 0px 0.1px 1.5px 0.5px #999999;
    background-color: ${({ open }) => (open ? "black" : "#FECCFF")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger
        open={open}
        setOpen={setOpen}
        onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <OpenedNav open={open} setOpen={setOpen} />
    </>
  );
};
export default Burger;
