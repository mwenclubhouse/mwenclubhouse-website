import {Typography} from "@mui/material";

export default function Navbar() {
    return (
        <div style={{
            zIndex: 100,
            position: "sticky",
            display: "flex",
            overflow: "hidden",
            top: 0,
            height: 50,
            backgroundColor: "#222",
            padding: "2px 20px",
            width: "100%"}}>
            <div style={{
                    marginTop: "auto", 
                    marginBottom: "auto", 
                    flex: 1,
                    cursor: "pointer"
                }} 
                onTouchMove={() => {}}
                onClick={() => {
                    window.location.href = "/"
                }}>
                <Typography>
                    MWENCLUBHOUSE
                </Typography>
            </div>
        </div>
    )

}