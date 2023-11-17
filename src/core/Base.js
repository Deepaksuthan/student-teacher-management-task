import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function BaseDefault({title,styles,children}){
    const history = useNavigate();
    return(
        <>
            <div className="navbar">
                <Button onClick={()=>history("/")} variant="primary">Dashboard</Button>
                <Button onClick={()=>history("/students")} variant="primary">Student</Button>
                <Button onClick={()=>history("/teachers")} variant="primary">Teacher</Button>
            </div>
            <div className={styles}>{title}</div>
            <div className="main-body">{children}</div>
        </>
    )
}