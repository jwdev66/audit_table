import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Button,
  Title,
  CloseButton,
  ErrorMessage,
} from "./styled";
import Modal from "react-modal";
import { loginWith } from "API";

export default function LoginForm({
  isLoginModalOpen,
  handleCloseModal,
  handleLogin,
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrMessage("");
    setIsLoading(true);

    await new Promise((r) => setTimeout(r, 1000));

    loginWith(username, password)
      .then((users) => {
        setIsLoading(false);
        if (users && users.length) {
          setErrMessage("");
          setUsername("");
          setPassword("");
          handleLogin(users[0]);
          handleCloseModal();
        } else {
          setErrMessage("Invalid Username or Password");
        }
      })
      .catch((e) => {
        setErrMessage(e.message);
        setIsLoading(false);
      });
  };

  return (
    <Modal isOpen={isLoginModalOpen} ariaHideApp={false} style={modalStyles}>
      <CloseButton onClick={() => handleCloseModal()} disabled={isLoading}>
        x
      </CloseButton>
      <Form onSubmit={handleSubmit}>
        <Title>Log In</Title>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          disabled={isLoading}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          disabled={isLoading}
        />
        <ErrorMessage>{errMessage}</ErrorMessage>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </Button>
      </Form>
    </Modal>
  );
}

LoginForm.propTypes = {
  handleFilter: PropTypes.func,
  handleCloseModal: PropTypes.func,
  isLoginModalOpen: PropTypes.bool,
};

LoginForm.defaultProps = {
  handleLogin: () => {},
  handleCloseModal: () => {},
  isLoginModalOpen: false,
};
