import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { Button } from "@mui/material"

const LogoutButton = () => {

    return (
        <Button variant="contained" size="small" onClick={() => {
            signOut(auth);
        }}>
            Log Out
        </Button>
    );
};

export default LogoutButton;