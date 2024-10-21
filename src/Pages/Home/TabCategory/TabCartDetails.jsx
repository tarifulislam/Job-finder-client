// import userPhoto from '../../../assets/images/user.png'
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from './../../../Provider/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

const TabCartDetails = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const cartDetails = useLoaderData();
    const { _id, job_title, description, min_price, max_price, category, deadline, buyer } = cartDetails || {}

    const handleBidSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const jobId = _id;
        const price = parseFloat(form.price.value)
        if (price < parseFloat(min_price)) {
            return toast.error("Offer more or at least equal Minimum Price")
        }
        const comment = form.comment.value;
        const deadline = startDate;
        const email = form.email.value;
        if (email === buyer?.email) {
            return toast.error("Action not Permitted")
        }
        const status = 'Pending';
        const bidData = {
            jobId,
            price,
            deadline,
            comment,
            job_title,
            category,
            email,
            status,
            buyer_email: buyer?.email,
            buyer,
        }
        fetch('http://localhost:5000/bid', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bidData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("data inserted successfully")
                }
            })

        // console.table(bidData)
    }

    return (
        <div className="container mx-auto pt-48 ">
            <div className=" w-11/12 container mx-auto flex justify-between">
                <div className=" w-[48%] p-6 space-y-2 shadow-md">
                    <div className=" flex justify-between items-center">
                        <span className="text-sm">Deadline: {new Date(deadline).toLocaleDateString()}</span>
                        <span style={{ backgroundColor: category === "Web Development" ? "red" : category === "Graphics Design" ? "green" : "blue" }} className="text-xs p-2 text-white rounded-md">{category}</span>
                    </div>
                    <h4 className=" text-2xl font-bold">{job_title}</h4>
                    <p className=" text-md">{description}</p>
                    <div className='flex gap-6 py-6'>
                        <div>
                            <h4 className=' font-semibold text-lg'>Buyer Details:</h4>
                            <p>{buyer?.name}</p>
                            <p>{buyer?.email}</p>
                        </div>
                        <div>
                            <img className='w-12 h-12 rounded-full' src={buyer?.photo} alt="" />
                        </div>
                    </div>
                    <p className="text-xl font-bold">Range: ${max_price} - ${min_price}</p>
                </div>
                <div className=" w-[50%] shadow-md p-4">
                    <h3 className=" font-semibold text-xl">Place A Bid</h3>
                    <form onSubmit={handleBidSubmit} className=" space-y-3">
                        <div className=' flex justify-between'>
                            <div className="form-control w-[49%] ">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="number" name='price' placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-[49%] ">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue={user?.email} name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                        </div>

                        <div className=' flex justify-between'>
                            <div className="form-control w-[49%] ">
                                <label className="label">
                                    <span className="label-text">Comment</span>
                                </label>
                                <input type="text" name='comment' placeholder="comment" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-[49%]">
                                <label className="label">
                                    <span className="label-text">Deadline</span>
                                </label>
                                <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                                {/* <input type="date" name='date' className="input input-bordered" required /> */}
                            </div>
                        </div>

                        <div className="mt-12 flex justify-end">
                            <input className="btn btn-primary px-6" type="submit" value="Place Bid" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TabCartDetails;