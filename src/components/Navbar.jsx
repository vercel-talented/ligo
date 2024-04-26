const Navbar = () => {
    return (
        <>
            <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://ligo.network/_next/image?url=%2Fimages%2Fligo-green.png&w=256&q=75" alt="Ligo Logo" />
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className="text-white border-white bg-black hover:text-gray-900 hover:bg-white">Earn $iGO</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                            <li>
                                <a href="#" className="block py-2 px-3 text-white md:p-0">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-white md:p-0">About</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-white md:p-0">Services</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-white md:p-0">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;