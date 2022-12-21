import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="p-4 bg-gradient-to-t from-blackish to-electric-violet-900">
      <div className="md:flex md:justify-between">
        <div className="flex items-baseline">
          <h2 className="text-3xl text-grayish font-bold text-center mb-1 md:mb-0 font-['Open_Sans'] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
            Panel de Administrador
          </h2>
          <Link
            to={"/admin"}
            className="ml-20 text-right text-grayish text-lg font-semibold hover:text-anakiwa-100 transition duration-300"
          >
            Admin
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="submit"
            value="Cerrar Sesión"
            className="bg-gradient-to-r from-blueish via-purpleish to-[#6d2caa] w-full p-3 rounded-full text-white uppercase font-bold hover:bg-gradient-to-l hover:animate-gradient-x transition-colors"
            onClick={logout}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
