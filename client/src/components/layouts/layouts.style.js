import styled from "styled-components";

export const NavbarArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  .nav-link {
    padding-right: 15px !important;
    padding-bottom: 10px !important;
  }
  .navbar-toggler {
    border-color: transparent !important;
  }
  .navbar-nav {
    align-items: center;
  }
  @media (max-width: 768px) {
    position: relative;
    .navbar-nav {
      align-items: unset;
    }
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  height: 20px;
  justify-content: space-between;
  position: relative;
  input {
    position: absolute;
    width: 40px;
    height: 28px;
    left: -5px;
    top: -3px;
    opacity: 0;
    cursor: pointer;
    z-index: 5;
  }
  span {
    display: block;
    width: 28px;
    height: 3px;
    background-color: #f7ed4a;
    border-radius: 3px;
    transition: all 500ms;
  }
  span:nth-child(2) {
    transform-origin: 0 0;
  }
  span:nth-child(4) {
    transform-origin: 0 100%;
  }
  input:checked ~ span:nth-child(2) {
    background-color: #ffd31d;
    transform: rotate(45deg) translate(-1px, -1px);
  }
  input:checked ~ span:nth-child(3) {
    opacity: 0;
    transform: scale(0);
  }
  input:checked ~ span:nth-child(4) {
    background-color: #ffd31d;
    transform: rotate(-45deg) translate(-1px, 0);
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
