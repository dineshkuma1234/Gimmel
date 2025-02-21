'use client'

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

function LogoutConfirmation() {
    const router = useRouter();
    const handleLogout = () => {
        localStorage.removeItem("token"); // Remove authentication token
        router.push("/login"); // Redirect to the login page
    };
    return (
        <>
            <main id="main" className="logout-space">
                <div className="custom-container">
                    <div className="logout-vector">
                        <Image src={require("../../../assets/images/logout.svg")} alt="User Avatar" />
                    </div>
                    <div className="logout-title">
                        Are you sure you want to log out?
                    </div>
                    <div className="logout-button">
                        <button type="button" className="btn-color-orange" onClick={handleLogout}>Yes, I want to log out</button>
                        <button type="button" className="btn-color-orange-outline mt-3" onClick={() => window.history.back()}>No, I want to stay logged in</button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default LogoutConfirmation;