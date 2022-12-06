import { signOut } from "firebase/auth"
import { auth } from "../config/firebase"
import { Button } from "@mui/material"
interface LogoutProps {
    close: () => void;
}

const LogoutButton = (props: LogoutProps) => {
    return (
        <Button variant="contained" size="small" onClick={() => {
            signOut(auth);
            props.close();
        }}>
            Log Out
        </Button>
    );
};

export default LogoutButton;