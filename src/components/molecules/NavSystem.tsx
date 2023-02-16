import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const NavCss = styled(Nav)`
  font-size: 3rem;
  color: red;
  background-color: #000000;
`;

const NavbarCss = styled(Navbar)`
  background-color: #000000;
`;

type setCurrentPage = (pageTitle: string) => void;

interface IProps {
  setCurrentPage: setCurrentPage;
}

function NavSystem(props: IProps) {
  return (
    <>
      <NavbarCss bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{ fontSize: "2rem" }}>
            Top{" "}
          </Navbar.Brand>
          <NavCss>
            <Nav.Link href="/" onClick={() => props.setCurrentPage("home")}>
              Home
            </Nav.Link>
            <Nav.Link
              href="/demo1"
              onClick={() => props.setCurrentPage("demo1")}
            >
              Features
            </Nav.Link>
            <Nav.Link
              href="/demo2"
              onClick={() => props.setCurrentPage("demo2")}
            >
              Pricing
            </Nav.Link>
            <Nav.Link href="/todo" onClick={() => props.setCurrentPage("todo")}>
              Todo
            </Nav.Link>
          </NavCss>
        </Container>
      </NavbarCss>
    </>
  );
}

export default NavSystem;
