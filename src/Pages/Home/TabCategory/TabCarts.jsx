import { useEffect, useState } from "react";
import TabCart from "./TabCart";

const TabCarts = ({ category }) => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className=" grid grid-cols-3 gap-6 py-9">
            {

                jobs.filter(j => j.category === category).map(job => <TabCart key={job._id} job={job}></TabCart>)
                // jobs.map(job => <TabCart key={job._id} job={job}></TabCart>)
            }
        </div>
    );
};

export default TabCarts;