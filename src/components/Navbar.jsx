const Navbar = () => {
    return (

        <nav className="flex justify-around items-center text-lg font-normal ">
            <div className="logo ">
            <img className="h-10" src="public\images\brand_logo.png" alt="logo" />
            </div>
            <ul className="flex gap-6">
                <li className="cursor-pointer px-4 py-2 hover:font-bold transition-none" href="#">Menu</li>
                <li className="cursor-pointer px-4 py-2 hover:font-bold transition-none" href="#">Location</li>
                <li className="cursor-pointer px-4 py-2 hover:font-bold transition-none" href="#">About</li>
                <li className="cursor-pointer px-4 py-2 hover:font-bold transition-none" href="#">Contact</li>
            </ul>
            <button className="bg-red-700 p-1 px-3 rounded-lg text-white hover:text-black hover:font-semibold">Login</button>
        </nav>

    );
  
}
export default Navbar
