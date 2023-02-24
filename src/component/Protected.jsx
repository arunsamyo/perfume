import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    
    const { Component } = props
    const navigate = useNavigate();
    useEffect(() => {
        let login1 = JSON.parse(localStorage.getItem('userinfo'));
        if (!login1) {
            navigate("/Login");
        }
        
    }, []);
    
    return (
        <>
            <Component />
        </>
    )
}
export default Protected;