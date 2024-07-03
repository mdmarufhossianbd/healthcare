import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-router-dom';
import logoDark from '../../public/Media/logo dark.png';

const Navber = () => {

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link>Home</Link></li>
                            <li><Link>Service</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>About Us</Link></li>
                        </ul>
                    </div>
                    <Link to={'/'}><img src={logoDark} alt="Health Care Logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li><Link>Service</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>About Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="border rounded-lg px-7 py-3 flex items-center gap-2 font-semibold">Appointment <FiArrowUpRight/> </a>
                </div>
            </div>
        </div>
    );
};

export default Navber;