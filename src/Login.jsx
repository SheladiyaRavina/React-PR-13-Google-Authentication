import { signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider } from "./firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {

    const navigate = useNavigate();

    const handlesubmit = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result.user);
            localStorage.setItem('token', result.user.accessToken);
            localStorage.setItem('user', JSON.stringify(result.user));
            navigate('/home');
        } catch (err) {
            console.log(err);
        }
    }
    const user = JSON.parse(localStorage.getItem('user'));
    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [])
    return (
        <div className="body">
        <center>
            <div className="container">
                <div className="row align-items-center justify-content-center p-5">
                    <h1 className="mt-5">Sign in with Goolge in React</h1>
                    <div className="col-xl-12 row">
                    <div className="col-xl-3"></div>
                        <div className="col-xl-6 mt-2">
                            <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" width="50px" height="50px"></img>
                            <button onClick={() => handlesubmit()} className="btn btn-primary">
                                Sign in With Goolge</button>
                        </div>

                    </div>
                </div>
            </div>


        </center>
        </div>
    )
}
export default Login;