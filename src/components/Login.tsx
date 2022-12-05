import { auth, provider } from "../config/firebase"
import { Button } from "@mui/material"
import { signInWithPopup } from "firebase/auth"

const LoginButton = () => {
    return <Button variant="contained" onClick={() => {
        signInWithPopup(auth, provider);
    }
    }>Sign in with Google</Button>;
};

export default LoginButton;