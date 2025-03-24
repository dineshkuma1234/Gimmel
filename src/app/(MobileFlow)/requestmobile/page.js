"use client";

import React from "react";
import Image from "next/image";
import BottomBar from "../../../components/BottomBar/BottomBar";
import Link from "next/link";
import { useRequestContext } from "@/app/Context/request/page";

const RequestMobile = () => {
  const { handlegetVideoRequest, requestListData } = useRequestContext();

  return (
    <div
      className="page-container-mobile"
      style={{ height: "100%", background: "#fff" }}
    >
      <div className="page-top-bar">
        <div className="page-inner">
          <div className="page-section-left">
            <div className="page-title">
              <h5>Request</h5>
            </div>
          </div>
          <div className="page-section-right">
            <div className="add-folder-button">
              <button className="btn">
                <Link href="/requestmobile/addrequest">
                  <Image
                    src={require("../../../assets/images/add-folder.svg")}
                    alt="add folder"
                  />
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="page-main-section top-space-request">
        <div className="custom-container">
          {requestListData.map((request, index) => (
            <div key={index} className="request-list">
              <Link
                href="/requestmobile/requestpreview"
                className="request-link"
              >
                <div
                  className="request-item active"
                  onClick={() => handlegetVideoRequest()}
                >
                  <div className="request-title">
                    <h5>{request?.title}</h5>
                    <div className="action-notification">
                      <Image
                        src={require("../../../assets/images/notifications_active.svg")}
                        alt="notification"
                      />
                    </div>
                  </div>
                  <div className="request-date">
                    <p>{request?.description}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <BottomBar />
    </div>
  );
};

export default RequestMobile;
