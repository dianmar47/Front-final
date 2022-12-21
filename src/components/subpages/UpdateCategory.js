import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import crud from "../../connections/crud";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Swal from "sweetalert2";

const UpdateCategory = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [category, setCategory] = useState({
    name: "",
    image: "",
  });

  const loadCategory = async () => {
    const response = await crud.GET(`/api/category/${id}`);
    console.log(response);
    setCategory(response.category);
  };

  useEffect(() => {
    loadCategory();
  }, []);

  const { name, image } = category;

  const onChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const updateCategory = async () => {
    const data = { name: category.name, image: category.image };
    const response = await crud.PUT(`/api/category/${id}`, data);
    const message = response.msg;
    if (message === "Accion no valida para este usuario") {
      const message = "Accion no valida para este usuario";
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
      const message = "La categoria ha sido actualizada exitosamente";
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
    navigate("/admin");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateCategory();
  };

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
            <h1 className="inline bg-gradient-to-r  from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Actualizar Categoria
            </h1>
          </div>

          <div className="flex justify-center">
            <form
              className="my-10 p-10 bg-blackish shadow rounded-lg"
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
                  placeholder="Nombre de la Categoria"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={name}
                  onChange={onChange}
                />
              </div>
              <div className="my-5 space-y-3">
                <label className="uppercase text-grayish block text-lx font-bold">
                  Imagen
                </label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  placeholder="Imagen de la Categoria"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={image}
                  onChange={onChange}
                />
              </div>
              <div className="mt-10">
                <input
                  type="submit"
                  value="Actualizar Categoria"
                  className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default UpdateCategory;
