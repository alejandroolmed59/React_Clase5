import React from "react";

const Login = props => {
  const { user, password, submitHandler, changeHandler } = props;
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={submitHandler}>
      <input
        id="user"
        onChange={changeHandler}
        value={user}
        placeholder="Ingrese usuario"
      />
      <input
        type='password'
        id="password"
        onChange={changeHandler}
        value={password}
        placeholder="Contraseña"
      />

      <button type="submit">
        Logearse
      </button>
    </form>
    </div>
  );
};

export default Login;