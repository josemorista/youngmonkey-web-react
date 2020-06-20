import styled from 'styled-components';

export const Menu = styled.div<{ open: boolean }>`
  width: 70%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.default.paper};
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  transition: 0.5s;
  clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%);
  transform: translate(${({ open }) => (open ? '0%' : '100%')});
`;

export const MenuBar = styled.div`
  width: 30px;
  height: 5px;
  background-color: black;
  margin: 5px 0;
  transition: 0.5s;
`;

export const MenuButton = styled.div`
  position: fixed;
  top: 1.5%;
  right: 1%;
  cursor: pointer;
  transition: 2s;
  z-index: 100;
`;

export const MenuOptions = styled.ul`
  padding: 0;
  list-style-type: none;
`;

export const MenuOption = styled.li`
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
  font-family: Uni Sans Bold;
  font-size: 80pt;
  width: 100%;
  padding-right: 8px;
  clip-path: polygon(0% 0%, 80% 0%, 74.5% 100%, 0% 100%);
  @media only screen and (max-width: 992px) and (min-width: 600px) {
    font-size: 60pt;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40pt;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary.hoverButtonText};
    background: ${({ theme }) => theme.colors.primary.hoverButton};
    transform: translate(0, -5px);
  }
`;

export const MenuIcon = styled.img`
  width: 40px;
  margin-left: 15px;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    transform: translateY(-5px);
  }
`

/*@media only screen and (min-width: 992px) {
    clip-path: polygon(0% 0%, 80% 0%, 75% 100%, 0% 100%);
  }*/
