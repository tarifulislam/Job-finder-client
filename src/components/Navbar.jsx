import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    // console.log(user?.email);
    // console.log(user?.displayName);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))

    }
    return (
        <div className=" border-b-2">
            <div className="drawer container mx-auto ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar w-full px-0">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className=" flex-1  font-bold">
                            <Link to="/">JOB FINDER</Link>
                        </div>

                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal space-x-2
                            ">
                                {/* Navbar menu content here */}
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/allJob">All Jobs</NavLink></li>
                                {
                                    user ?
                                        <div className="dropdown dropdown-bottom dropdown-end z-50">
                                            <div tabIndex={0} role="button" className="m-1">
                                                <img referrerPolicy='no-referrer' className=" w-9 h-9 rounded-full" src={user?.photoURL} alt="" />
                                            </div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-72 p-2 shadow space-y-2 mt-5">
                                                <li><NavLink to="/addJob">Add Job</NavLink></li>
                                                <li><NavLink to="/postedJobs">My Posted Jobs</NavLink></li>
                                                <li><NavLink to="/">My Bids</NavLink></li>
                                                <li><NavLink to="/">Bids Request</NavLink></li>
                                                <span onClick={handleLogOut} className=" btn btn-secondary btn-sm mt-2">Logout</span>
                                            </ul>
                                        </div>
                                        :
                                        <li><NavLink to="/signIn">Login</NavLink></li>
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;