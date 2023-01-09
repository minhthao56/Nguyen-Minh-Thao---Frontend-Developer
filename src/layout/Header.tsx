import Logo from "../assets/img/logo.png";

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
            <a
              href="/"
              className="whitespace-nowrap text-base font-medium text-white"
            >
              Sign in
            </a>
            <a
              href="/"
              className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-black shadow-sm"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
