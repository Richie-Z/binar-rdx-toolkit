import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/features/register/registerSlice";

const RegisterPage = () => {
  const { message, error } = useSelector((state) => state.register);
  const [registerDTO, setRegisterDTO] = useState({
    name: "",
    username: "",
    password: "",
  })

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRegisterDTO((data) => ({
      ...data,
      [name]: value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(register(registerDTO))
  }
  return (
    <div>
      <h1>Register page</h1>
      {message?.length ? (
        <h1>{message}</h1>
      ) : null}
      {error?.length ? (
        <h1>{error}</h1>
      ) : null}
      <form onSubmit={handleFormSubmit}>
        <div><label htmlFor="">Name</label><input type="text" name="name" onChange={handleInputChange} /></div>
        <div><label htmlFor="">Username</label><input type="text" name="username" onChange={handleInputChange} /></div>
        <div><label htmlFor="">Password</label><input type="text" name="password" onChange={handleInputChange} /></div>
        <div><button>Submit</button></div>
      </form>
    </div>
  );
};

export default RegisterPage;
