import { Link } from "react-router-dom";

const TabCart = ({ job }) => {
    const { _id, buyer_email, deadline, category, description, job_title, max_price, min_price } = job;

    return (
        // <Link to="/jobDetails">
        <Link to={`/jobDetails/${_id}`}>
            <div className="card w-full shadow-md">
                <div className=" p-6 space-y-2">
                    <div className=" flex justify-between items-center">
                        <span className="text-xs">Deadline: {new Date(deadline).toLocaleDateString()}</span>
                        <span style={{ backgroundColor: category === "Web Development" ? "red" : category === "Graphics Design" ? "green" : "blue" }} className="text-xs p-2 text-white rounded-md">{category}</span>
                    </div>
                    <h4 className=" text-lg font-semibold">{job_title}</h4>
                    <div className=" h-6">
                        <p className="text-xs">{description.substring(0, 90)}</p>
                    </div>
                    <p className=" text-md font-semibold">Range: ${max_price} - ${min_price}</p>
                </div>
            </div >
        </Link>
    );
};

export default TabCart;