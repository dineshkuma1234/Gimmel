'use client'

import React ,{useEffect, useState} from "react";
import RequestData from "../entities/request-data/page";
import AuthService from "@/services/AuthService";

function PageComponent() {
 

    const [requestListData,setRequestListData] = useState('');

    useEffect(() => {
        handleRequestList();
    },[])

      const handleCreateRequest = async (yourRequest,discription,avoided,details) => {
        // LoaderHelper.loaderStatus(true);
        try {
          const result = await AuthService.CreateRequest(yourRequest,discription,avoided,details);
          if (result?.success) {
            handleRequestList();
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('success', 'Gimmel', result?.message);
            // handleRequestList();
          } else {
            // LoaderHelper.loaderStatus(false);
            // AlertHelper.show('danger', 'Gimmel', result?.message);
          }
        } catch (error) {
        //   LoaderHelper.loaderStatus(false);
        //   console.log('Error occurred:', 'Gimmel', error);
        }
      };
      const handleRequestList = async () => {
        try {
          const result = await AuthService.RequestList();
          if (result?.success) {
            setRequestListData(result?.data?.data);
          } else {
            AlertHelper.show('danger', 'Gimmel', result?.message);
          }
        } catch (error) {
          console.log('Error occurred:', 'Gimmel', error);
        }
      };

      console.log(requestListData,"requestListData---++")

    return (
        <>
            <RequestData handleCreateRequest={handleCreateRequest} requestListData={requestListData} />
        </>
    );
}

export default PageComponent;