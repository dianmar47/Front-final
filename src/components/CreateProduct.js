import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import crud from "../connections/crud";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";

const CreateProduct = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    stock: "",
    price: "",
    image: "",
    categoryId: "",
  });

  const { name, description, stock, price, image } = product;

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const createProduct = async () => {
    if (
      name.length === 0 ||
      description.length === 0 ||
      stock.length === 0 ||
      price.length === 0 ||
      image.length === 0
    ) {
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
    } else {
      const data = {
        name: product.name,
        description: product.description,
        stock: product.stock,
        price: product.price,
        image: product.image,
        categoryId: id,
      };

      const response = await crud.POST("/api/product", data);
      const message = response.msg;

      if (message === "El producto ya existe") {
        const message = "El producto ya existe";
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
        const message = "El producto ha sido creado exitosamente";
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
    }

    navigate(`/home-products/${id}`);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    createProduct();
  };

  return (
    <>
      <Header />
      <div className="md:flex md:min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <div className="mt-10 flex justify-center">
            <h1 className="inline bg-gradient-to-r  from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text font-display text-5xl tracking-tight text-transparent">
              Crear Producto
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
                  placeholder="Nombre del Producto"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={name}
                  onChange={onChange}
                />
              </div>

              <div className="my-5 space-y-3">
                <label className="uppercase text-grayish block text-lx font-bold">
                  Descripcion
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  placeholder="Descripcion del Producto"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={description}
                  onChange={onChange}
                />
              </div>

              <div className="my-5 space-y-3">
                <label className="uppercase text-grayish block text-lx font-bold">
                  Stock
                </label>
                <input
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder="Stock del Producto"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={stock}
                  onChange={onChange}
                />
              </div>

              <div className="my-5 space-y-3">
                <label className="uppercase text-grayish block text-lx font-bold">
                  Precio
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  placeholder="Precio del Producto"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={price}
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
                  placeholder="Imagen del Producto"
                  className="w-full p-3 rounded-lg bg-woodsmoke-800 text-grayish focus:outline-none focus:border focus:border-anakiwa-700 focus:ring focus:ring-anakiwa-400/30 placeholder:text-woodsmoke-200 focus:placeholder-gray-400"
                  value={image}
                  onChange={onChange}
                />
              </div>
              <div className="mt-10">
                <input
                  type="submit"
                  value="Crear Producto"
                  className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full py-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
                />
              </div>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateProduct;
