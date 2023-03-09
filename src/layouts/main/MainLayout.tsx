import React from "react";
import {Header} from "../header/Header";
import './Mainlayout.css';
import {Sidebar} from "../sidebar/Sidebar";

export function MainLayout() {
    return (
        <>
            <div className="">
                <div className="layout-header" data-testid="header">
                    <Header/>
                </div>

                <div className="layout-sidebar" data-testid="sidebar">
                    <Sidebar/>
                </div>

                <div className="layout-content" data-testid="content">

                </div>

            </div>
        </>)
}