import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import PrimaryButton from "../components/PrimaryButton";
import { useWhoIAmContext } from "../contexts/WhoIAmContext";

export default function Header() {
  const { email } = useWhoIAmContext();

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
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {email ? (
              <>
                <span className="text-white">{email}</span>
                <PrimaryButton
                  type="button"
                  className="w-14 ml-8"
                  onClick={() => {
                    localStorage.clear();
                    window.location.assign("login");
                  }}
                >
                  Logout
                </PrimaryButton>
              </>
            ) : (
              <>
                <Link to={"/register"}>
                  <PrimaryButton type="button" className="w-40">
                    Sign in
                  </PrimaryButton>
                </Link>
                <Link to={"/login"}>
                  <PrimaryButton type="button" className="w-40">
                    Login
                  </PrimaryButton>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
