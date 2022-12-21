import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import crud from "../connections/crud";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { name, email, password, passwordConfirm } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createAccount = async () => {
    if (name.length === 0 || email.length === 0 || password.length === 0) {
      const message = "Todos los campos son obligatorios";
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
    }

    // check passwords are the same
    else if (password !== passwordConfirm) {
      const message = "Las contraseñas son diferentes";
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
      const data = {
        name: user.name,
        email: user.email,
        password: user.password,
      };
      console.log(data);
      const response = await crud.POST(`/api/user`, data);
      const message = response.msg;
      //console.log(message);

      if (message === "El usuario ya existe") {
        const message = "El usuario ya existe";
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
        const message = "El usuario ha sido creado exitosamente";
        Swal.fire({
          title: "Informacion",
          text: message,
          icon: "success",
          buttons: {
            confirm: {
              text: "OK",
              value: true,
              visible: true,
              className: "btn btn-primary",
              closeModal: true,
            },
          },
        });
      }
      setUser({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
      });
      navigate("/login");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createAccount();
  };

  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="flex-row text-center md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text text-transparent font-display text-6xl tracking-tight">
          Crear Cuenta
        </h1>
        <form
          className="my-10 p-10 text-justify bg-blackish shadow rounded-lg"
          onSubmit={onSubmit}
        >
          <div className="my-5 space-y-3">
            <label className="uppercase text-grayish block text-lx font-bold">
              Nombre
            </label>
            <input
              type="name"
              id="name"
              name="name"
              placeholder="Ingrese su nombre"
              className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400 "
              value={name}
              onChange={onChange}
            />
          </div>

          <div className="my-5 space-y-3">
            <label className="uppercase text-grayish block text-lx font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese su email"
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
              placeholder="Ingrese su password"
              className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
              value={password}
              onChange={onChange}
            />
          </div>

          <div className="my-5 space-y-3">
            <label className="uppercase text-grayish block text-lx font-bold">
              Confirme su password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              placeholder="Confirmación del password"
              className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
              value={passwordConfirm}
              onChange={onChange}
            />
          </div>
          <div className="mt-10 space-y-6">
            <input
              type="submit"
              value="Registrarse"
              className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
            />
            <Link
              to={"/"}
              className="block text-center text-grayish text-lg font-semibold hover:text-anakiwa-100 transition duration-300"
            >
              Volver
            </Link>{" "}
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateAccount;
