import React from "react";
import { useParams } from "react-router";

export default function User(){

    const{userid} = useParams();
    return(
        <>
        <div>
            user:{userid}
        </div>
        </>
    );
};