import { Link } from "react-router-dom";

const JobTableRow = ({ job, handleDelete }) => {

    const { _id, job_title, deadline, category, description, max_price, min_price } = job || {}
    // console.log(job);

    return (
        <tr className="bg-base-200 my-2">
            <th>{job_title}</th>
            <td>{new Date(deadline).toLocaleDateString()}</td>
            <td>${min_price} - ${max_price}</td>
            <td>{category}</td>
            <td>{description}</td>
            <td className=" space-x-3">
                <button onClick={() => { handleDelete(_id) }} className=" btn btn-secondary">D</button>
                <Link to={`/updateJobPost/${_id}`}>
                    <button className=" btn btn-primary">U</button>
                </Link>

            </td>
        </tr>
    );
};

export default JobTableRow;