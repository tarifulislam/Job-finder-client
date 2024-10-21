import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [startDate, setStartDate] = useState(new Date());
    const handleAddjob = (e) => {
        e.preventDefault();
        const form = e.target;
        const job_title = form.jobTitle.value;
        const email = form.email.value;
        const deadline = startDate;
        const category = form.category.value;
        const min_price = form.minPrice.value;
        const max_price = form.maxPrice.value;
        const description = form.description.value;
        const jobData = {
            job_title,
            deadline,
            category,
            min_price,
            max_price,
            description,
            buyer: {
                email,
                name: user?.displayName,
                photo: user?.photoURL
            }
        }
        console.log(jobData);

        fetch('http://localhost:5000/jobs', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert("data inserted successfully")
                    navigate('/postedJobs')
                }
            })

    }

    return (
        <div className=" container mx-auto py-48">
            <div className=" w-[70%] mx-auto shadow-md p-4">
                <h3 className=" font-semibold text-xl">Post a Job</h3>
                <form onSubmit={handleAddjob} className=" space-y-3">
                    <div className=' flex justify-between'>
                        <div className="form-control w-[49%] ">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name='jobTitle' placeholder="job title" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[49%] ">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input defaultValue={user?.email} type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className=' flex justify-between'>
                        <div className="form-control w-[49%]">
                            <label className="label">
                                <span className="label-text">Deadline</span>
                            </label>
                            {/* <input type="date" name='date' className="input input-bordered" required /> */}
                            <DatePicker className='input input-bordered w-full' selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                        <div className="form-control w-[49%] ">
                            <label className="label" htmlFor="category">
                                <span className="label-text">Category</span>
                            </label>
                            <select name="category" className="input input-bordered">
                                <option value="Web Development">Web Development</option>
                                <option value="Graphics Design">Graphics Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                            </select>
                        </div>
                    </div>
                    <div className=' flex justify-between'>
                        <div className="form-control w-[49%] ">
                            <label className="label">
                                <span className="label-text">Minimum Price</span>
                            </label>
                            <input type="number" name='minPrice' placeholder="min price" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-[49%]">
                            <label className="label">
                                <span className="label-text">Maximum Price</span>
                            </label>
                            <input type="number" name='maxPrice' placeholder="max price" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className=''>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea className=" resize-none
                             border-2 outline-none p-2" name="description" id="" cols="30" rows="4"></textarea>
                        </div>
                    </div>

                    <div className="mt-12 flex justify-end">
                        <input className="btn btn-primary px-6" type="submit" value="Save" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;