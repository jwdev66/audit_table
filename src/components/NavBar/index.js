import React from "react";
import PropTypes from "prop-types";
import { Container, LogoTitle, Button } from "./styled";

export default function NavBar({ isLogged, handleAuth }) {
  return (
    <Container>
      <LogoTitle>Daupler</LogoTitle>
      <Button onClick={() => handleAuth()}>{isLogged ? "Log out" : "Log in"}</Button>
    </Container>
  );
}

NavBar.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  handleAuth: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  isLogged: false,
  handleAuth: () => {},
};
