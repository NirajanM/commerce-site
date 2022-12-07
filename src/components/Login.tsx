import { auth, provider } from "../config/firebase"
import { Button } from "@mui/material"
import { signInWithPopup } from "firebase/auth"
import { useNavigate } from "react-router-dom"



const LoginButton = () => {
    const navigate = useNavigate();
    return <Button variant="contained" onClick={() => {
        signInWithPopup(auth, provider).then(() => {
            navigate("/");
            alert("login successful")
        });
    }
    }>Sign in with Google</Button>;
};

export default LoginButton;