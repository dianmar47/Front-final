import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import crud from "../connections/crud";
import Swal from "sweetalert2";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
      }
    };
    authUser();
  }, [navigate]);

  const [category, setCategory] = useState([]);

  const loadCategories = async () => {
    const response = await crud.GET(`/api/category`);
    setCategory(response.category);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const deleteCategory = async (e, id) => {
    Swal.fire({
      title: "¿Estas seguro de que deseas eliminar esta categoria?",
      text: "Una vez eliminado, no podras recuperar esta categoria",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        e.preventDefault();
        const response = crud.DELETE(`/api/category/${id}`);
        const message = response.msg;
        console.log(message);

        if (response) {
          const message = "La categoria fue eliminada correctamente";
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
        loadCategories();
      } else {
        Swal.fire("Se cancelo la acción");
      }
    });
  };

  const updateCategory = async (e, id) => {
    navigate(`/update-category/${id}`);
  };

  const createProduct = async (e, id) => {
    navigate(`/home-products/${id}`);
  };

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="w-full m-4">
          <h1 className="inline bg-gradient-to-r from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text text-transparent font-display text-6xl tracking-tight">
            Listado de Categorias
          </h1>
          <div className="flex flex-row flex-wrap justify-evenly">
            {category.map((item) => (
              <div
                key={item._id}
                className="flex flex-col w-full md:items-center bg-woodsmoke-900/20 rounded-lg shadow-md mt-10 md:flex-row md:max-w-xl"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
                  src={item.image}
                />
                <div className="justify-center w-full p-6 text-white">
                  <h2 className="mb-2 text-2xl font-bold">{item.name}</h2>
                  <input
                    type="submit"
                    value="Editar"
                    className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 mt-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                    onClick={(e) => updateCategory(e, item._id)}
                  />
                  <input
                    type="submit"
                    value="Eliminar"
                    className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 mt-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                    onClick={(e) => deleteCategory(e, item._id)}
                  />
                  <input
                    type="submit"
                    value="Crear Producto"
                    className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 mt-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                    onClick={(e) => createProduct(e, item._id)}
                  />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;

/*
<table>
            <thead className="bg-white">
              <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>ID</th>
                <th>Opciones</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {category?.map((item) => (
                <tr key={item._id}>
                  <td>img</td>
                  <td>{item.name}</td>
                  <td>{item._id}</td>
                  <td>
                    <button onClick={deleteCategory(e, item._id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */
