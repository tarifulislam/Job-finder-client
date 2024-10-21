import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocialShare = () => {
    const { googleSign } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogleLogin = () => {
        googleSign()
            .then(res => {
                const user = res.user;
                console.log(user);
                navigate("/")
            })
            .catch(err => console.log(err));
    }
    return (
        <div className=' text-center py-3 border-2 rounded cursor-pointer' >
            <h3 onClick={handleGoogleLogin}>Sign in with Google</h3>
        </div>
    );
};

export default SocialShare;