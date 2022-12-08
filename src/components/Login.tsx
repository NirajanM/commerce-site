import { auth, provider } from "../config/firebase"
import { Button } from "@mui/material"
import { signInWithPopup } from "firebase/auth"
import { useContext } from "react";
import { CartContext } from '../context/CartContext';


const LoginButton = () => {
    const { handleSignIn } = useContext(CartContext);
    return <Button variant="contained" onClick={() => {
        signInWithPopup(auth, provider).then(() => {
            handleSignIn(true);
            alert("login successful")
        });
    }
    }>Sign in with Google</Button>;
};

export default LoginButton;