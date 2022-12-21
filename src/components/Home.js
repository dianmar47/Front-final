import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import crud from "../connections/crud";

const Home = () => {
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);

  const loadCategories = async () => {
    const response = await crud.GET(`/api/category/home`);
    setCategory(response.category);
  };

  useEffect(() => {
    loadCategories();
    loadProducts();
  }, []);

  const [product, setProduct] = useState([]);

  const loadProducts = async () => {
    const response = await crud.GET(`/api/product`);
    setProduct(response.product);
  };

  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="flex-1 text-center md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-electric-violet-400 via-anakiwa-100 to-electric-violet-300 bg-clip-text text-transparent font-display text-6xl tracking-tight">
          Home
        </h1>
        <Link
          to={"/login"}
          className="block text-center text-grayish text-lg font-semibold mt-12 hover:text-anakiwa-100 transition duration-300"
        >
          Iniciar Sesión
        </Link>
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <h2 className="text-xl font-semibold text-white mb-2">
            Compra por categorías
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-woodsmoke-900/20 rounded-lg">
            {category.map((item) => (
              <div
                key={item._id}
                class="w-full rounded-lg p-12 flex flex-col justify-center items-center"
              >
                <img
                  className="object-center object-cover rounded-full h-48 w-48 cursor-pointer hover:-translate-y-1 hover:scale-110 mb-2 transition ease-in-out"
                  src={item.image}
                />
                <div className="text-center">
                  <p className="text-lg text-white mb-2 cursor-pointer">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <h2 className="text-xl font-semibold text-white mb-6">
          Nuestros productos
        </h2>
        <div className="flex flex-wrap -m-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 bg-woodsmoke-900/20 rounded-lg">
          {product.map((item) => (
            <div key={item._id} className="lg:w-1/3 sm:w-1/2 p-12">
              <div className="flex relative h-96">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                  src={item.image}
                />
                <div className="px-8 py-10 relative h-full w-full z-10 rounded-lg border-4 border-woodsmoke-800 bg-woodsmoke-900 opacity-0 cursor-pointer hover:opacity-100">
                  <h2 className="tracking-wider text-sm title-font font-medium text-indigo-400 mb-1">
                    ${item.price}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {item.name}
                  </h1>
                  <p className="leading-relaxed text-white">
                    {item.description}
                  </p>
                  <button className="text-grayish mt-10 font-semibold hover:text-anakiwa-100 transition duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.2}
                      stroke="currentColor"
                      className="w-6 h-6 inline mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;

// radial-gradient(at center center, rgb(190, 242, 100), rgb(94, 234, 212), rgb(30, 41, 59))
