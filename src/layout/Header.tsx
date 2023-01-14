import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import PrimaryButton from "../components/PrimaryButton";

export default function Header() {
  return (
    <div className="relative bg-black">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto sm:h-10" src={Logo} alt="logo" />
            </a>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <a
              href="/"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Pricing
            </a>
            <a
              href="/"
              className="text-base font-medium text-white hover:text-gray-900"
            >
              Docs
            </a>
          </nav>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to={"/register"}>
              <PrimaryButton type="button" className="w-40">
                Sign in
              </PrimaryButton>
            </Link>
            <Link to={"/login"}>
              <PrimaryButton color="white" type="button" className="w-40">
                Login
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
