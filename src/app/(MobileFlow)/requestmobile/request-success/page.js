'use client'

import Image from "next/image";
import Link from "next/link";
import React from "react";

function RequestSuccess() {
    return (
        <>
            <main id="main" className="logout-space">
                <div className="custom-container">
                    <div className="logout-vector">
                        <Image src={require("../../../../assets/images/request-success.svg")} alt="User Avatar" />
                    </div>
                    <div className="logout-title">
                        Request sent sucesfully!
                    </div>
                    <div className="logout-button">
                        <Link href={"/requestmobile"} className="btn-color-orange">Okay</Link>
                    </div>
                </div>
            </main>
        </>
    );
}

export default RequestSuccess;