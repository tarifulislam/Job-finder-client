import { useContext, useEffect, useState } from "react";
import { AuthContext } from './../../Provider/AuthProvider';
import JobTableRow from "./JobTableRow";

const MyPostedJob = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/job/${user?.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user?.email])

    const handleDelete = id => {
        fetch(`http://localhost:5000/job/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("data remove successful")
                    const remaining = jobs.filter(job => job._id !== id);
                    setJobs(remaining)
                }
            })
    }

    return (
        <div className=" container mx-auto">
            <div className=" py-6 space-x-2">
                <span className=" font-bold  text-2xl">My Posted Job </span>
                <span className=" bg-lime-200 px-4 rounded-md">{jobs.length}</span>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Deadline</th>
                            <th>Price Range</th>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            jobs.map(job => <JobTableRow key={job._id} job={job} handleDelete={handleDelete}></JobTableRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJob;