import LogoIcon from "../assets/LogoIcon";
import MenuIcon from "../assets/MenuIcon";
import Carrito from "./Carrito";
import Filtros from "./Filtros";
import UserIcon from "../assets/UserIcon";
import ShoppingCart from "../assets/ShoppingCart";

const Header = ({
  carrito,
  setCarrito,
  modalUser,
  setModalUser,
  sumar,
  setSumar,
  filtro,
  setFiltro,
  modalCarrito,
  setModalCarrito,
}) => {
  const handleCarrito = () => {
    setModalCarrito(true);
  };

  const handleModalUser = () => {
    console.log("tocaste user");
    setModalUser(true);
  };

  return (
    <nav className="bg-white shadow-xl">
      <div className="max-w px-8">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="flex items-center">
              <a href="#" className="items-center flex py-4 px-2">
                <span className="hover:bg-gray-200 rounded-lg py-2.5 center">
                  <MenuIcon />
                </span>
              </a>
            </div>
          </div>

          <div>
            <a
              href="#"
              className="block items-center pl-10 py-4 text-black-700"
            >
              <span className="center">
                <LogoIcon />
              </span>
            </a>
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
                    <a
                      href="#"
                      className="text-sm font-bold hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Iniciar Sesion
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
                    >
                      Registrate
                    </a>
                  </li>
                </ul>
              </div>
              <button className="hover:bg-gray-200  rounded-lg px-4 py-2.5"
                        onClick={handleCarrito}>
                <ShoppingCart carrito={carrito}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
