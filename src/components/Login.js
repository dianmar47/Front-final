import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from "../connections/crud";
import Swal from "sweetalert2";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const login = async () => {
    const data = {
      email: user.email,
      password: user.password,
    };

    const response = await crud.POST("/api/auth", data);
    const message = await response.msg;
    if (message === "El usuario no existe") {
      const message = "El usuario no existe";
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else if (message === "El password es incorrecto") {
      const message = "El password es incorrecto";
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
        buttons: {
          confirm: {
            text: "OK",
            value: true,
            visible: true,
            className: "btn btn-danger",
            closeModal: true,
          },
        },
      });
    } else {
      // save token on local storage
      const jwt = response.token;
      localStorage.setItem("token", jwt);
      navigate("/admin");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="flex-row text-center md:w-2/3 lg:w-2/5">
        <h1 className="inline  bg-gradient-to-r from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text text-transparent font-display text-6xl tracking-tight">
          Iniciar Sesión
        </h1>
        <form
          className="my-10 p-10 text-justify bg-blackish shadow rounded-lg"
          onSubmit={onSubmit}
        >
          <div className="my-5 space-y-3">
            <label className="uppercase text-grayish block text-lx font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email de Registro"
              className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="my-5 space-y-3">
            <label className="uppercase text-grayish block text-lx font-bold">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password de Registro"
              className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="mt-10 space-y-6">
            <input
              type="submit"
              value="Iniciar Sesión"
              className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
            />
            <Link
              to={"/create-account"}
              className="block text-center text-grayish text-lg font-semibold hover:text-anakiwa-100 transition duration-300"
            >
              Crear Cuenta
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
