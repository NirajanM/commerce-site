import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { Button } from "@mui/material"
import { useContext } from "react";
import { CartContext } from '../context/CartContext';

interface LogoutProps {
    close: () => void;
}

const LogoutButton = (props: LogoutProps) => {
    const { handleSignIn } = useContext(CartContext);
    return (
        <Button variant="contained" size="small" onClick={() => {
            signOut(auth).then(() => {
                props.close()
                handleSignIn(false)
                alert("logged out")
            })

        }}>
            Log Out
        </Button>
    );
};

export default LogoutButton;