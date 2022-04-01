import LogoIcon from "../assets/icons/LogoIcon";
import MenuIcon from "../assets/icons/MenuIcon";
import Filtros from "./Filtros";
import UserIcon from "../assets/icons/UserIcon";
import ShoppingCart from "../assets/ShoppingCart";
import { Link } from "react-router-dom";

const Header = ({ filtro, setFiltro }) => {
  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <Link to="#" className="items-center flex py-4">
                <span className="hover:bg-gray-200 rounded-lg py-2.5 center">
                  <MenuIcon />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <Link to="/o/tienda" className="block pt-4 text-black-700">
              <LogoIcon/>
            </Link>
          </div>

          <div className="flex">
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <div className="items-center flex py-4 px-2">
              <button
                className="hover:bg-gray-200 rounded-lg px-4 py-2.5"
                type="button"
                data-dropdown-toggle="dropdown"
              >
                <UserIcon />
              </button>

              <div
                className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4"
                id="dropdown"
              >
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <Link
                      to="/o/login"
                      className="text-sm font-bold hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Iniciar Sesion
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Registrate
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                to="/o/tienda/cart"
              >
                <ShoppingCart />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
