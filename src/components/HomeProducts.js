import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import crud from "../connections/crud";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";

const HomeProducts = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState([]);

  const loadProducts = async () => {
    const response = await crud.GET(`/api/product/${id}`);
    setProduct(response.product);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const updateProduct = async (e, id) => {
    navigate(`/update-product/${id}`);
  };

  const deleteProduct = async (e, id) => {
    Swal.fire({
      title: "¿Estas seguro de que deseas eliminar este producto?",
      text: "Una vez eliminado, no podras recuperar este producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "OK",
    }).then((result) => {
      if (result.isConfirmed) {
        e.preventDefault();
        const response = crud.DELETE(`/api/product/${id}`);
        const message = response.msg;
        console.log(message);

        if (response) {
          const message = "El producto fue eliminado correctamente";
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
        loadProducts();
      } else {
        Swal.fire("Se cancelo la acción");
      }
    });
  };

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="w-full m-4">
          <h1 className="inline bg-gradient-to-r from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text text-transparent font-display text-6xl tracking-tight">
            Listado de Productos
          </h1>
          <div className="flex flex-row flex-wrap justify-evenly">
            {product.map((item) => (
              <div
                key={item._id}
                className="flex flex-col w-full md:items-center bg-woodsmoke-900/20 rounded-lg shadow-md mt-10 md:flex-row md:max-w-xl"
              >
                <img
                  className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
                  src={item.image}
                />
                <div className="justify-center p-6 w-full text-white">
                  <h2 className="mb-2 text-2xl font-bold">{item.name}</h2>
                  <p className="text-grayish font-medium">{item.description}</p>
                  <p>${item.price}</p>
                  <p>{item.stock} artículos disponibles</p>
                  <input
                    type="submit"
                    value="Editar"
                    className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 mt-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                    onClick={(e) => updateProduct(e, item._id)}
                  />
                  <input
                    type="submit"
                    value="Eliminar"
                    className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 mt-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                    onClick={(e) => deleteProduct(e, item._id)}
                  />
                </div>
              </div>
            ))}
            <Link
              className="flex flex-col w-full md:items-center bg-woodsmoke-900/20 rounded-lg shadow-md mt-10 md:flex-row md:max-w-xl"
              to={`/create-product/${id}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.2}
                stroke="currentColor"
                className="h-[279.92px] w-48  text-white block m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default HomeProducts;
