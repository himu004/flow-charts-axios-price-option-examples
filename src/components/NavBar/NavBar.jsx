import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const NavBar = () => {

    const [open , setOpen] = useState(false);

    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About Us', id: 'about' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/contact', name: 'Contact Us', id: 'contact' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' }
      ];
    return (
        <nav className="bg-slate-300 p-2">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
            </div>
            <ul className={`md:flex justify-center duration-1000 absolute md:static ${open ? 'top-10' : 'hidden'} bg-slate-300 px-6 rounded-lg mt-5`}>
            {
                routes.map(route => 
                    <Link key={route.id} route={route}></Link>
                )
            }
            </ul>
        </nav>
    );
};

export default NavBar;