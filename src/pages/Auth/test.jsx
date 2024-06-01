import React from "react";
import { useHistory } from "react-router-dom";

const RedirectLogin = () => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/login");
  };

  return (
    <button onClick={handleRedirect}>
      Go to Login
    </button>
  );
};

export default RedirectLogin;