import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { Button, CircularProgress } from "@mui/material";
import {TextField} from "@mui/material";


export default function  Profile() {
    return (
        <main>
            <div className="flex flex-col gap-3 items-center justify-center">
                <FaFacebookF className="text-4x1 text-blue-500" />
                <Button variant="contained">Sign Up</Button>
                <TextField/>
                <CircularProgress/>
            </div>
            
        </main>
    )
}