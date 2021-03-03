/* eslint-disable */
import React, { Fragment } from 'react';
import { useParams } from "react-router-dom";

export default function ProductDetails() {
    
    let { id } = useParams();

    return (
        <Fragment>
            {console.log("Hello")}
            <p>testing {id}</p>
        </Fragment>
    )
}