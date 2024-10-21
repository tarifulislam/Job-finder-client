import SocialShare from "./SocialShare";
import loginImg from '../../assets/images/login.jpg'
import logoImg from '../../assets/images/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
const SignUp = () => {
    const { createUser, handleUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        createUser(email, password)
            .then(() => {
                handleUpdateProfile(name, photoUrl);
            })
            .then(() => {
                toast.success('Successfully toasted!')
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="container mx-auto">
            <div className=" w-8/12 mx-auto  pt-24 pb-20 ">
                <div className="flex ">
                    <div className=" w-1/2 ">
                        <img className=' min-h-[760px]' src={loginImg} alt="" />
                    </div>
                    <div className=" w-1/2  rounded-none bg-base-100 shadow-xl">
                        <form onSubmit={handleSignUpSubmit} className="card-body">
                            <div className=' text-center'>
                                <h3 className=' text-zinc-500 text-2xl mb-4'>Welcome</h3>
                                <img className=' w-12 mx-auto' src={logoImg} alt="" />
                            </div>
                            <div className='pb-2' >
                                <SocialShare></SocialShare>
                            </div>
                            <div className=' flex justify-between items-center'>
                                <div className='h-[1px]  w-[18%] bg-slate-300'></div>
                                <div className=''> <span>OR LOGIN WITH EMAIL</span> </div>
                                <div className='h-[1px] w-[18%] bg-slate-300'></div>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Username</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photoUrl" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email Address</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary bg-black" type="submit" value="SignUp" />
                            </div>
                        </form>
                        <div className='px-9 pb-6 flex justify-between items-center'>
                            <div className='h-[1px] w-[25%] bg-slate-300'></div>
                            <div className=''> <Link to="/signUp">OR SIGN UP</Link> </div>
                            <div className='h-[1px] w-[25%] bg-slate-300'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;