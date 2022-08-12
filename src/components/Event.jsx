import React from "react";
import { Outlet } from "react-router-dom";

export default function Event() {
    return (
        <div>
            <h1>EVENT PAGE</h1>
            <Outlet></Outlet>
        </div>
    )
}