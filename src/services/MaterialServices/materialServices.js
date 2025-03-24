// "use client";

// import { ApiCallGet } from "../../apiCall/apiCall";
// import { ApiConfig } from "../../apiCall/apiConfig";

// const materialQuestion = async (id,type) => {
//     const token =  localStorage.getItem('token');
//     const { authBaseUrl, materialQuestion } = ApiConfig;
//     const url = authBaseUrl + materialQuestion[type] + id;
//     // console.log(url,token,"url---")
//     const params = {};
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };
//     return ApiCallGet(url, params, headers);
//   }

//   const regenerateMaterialQuestion = async (id,type) => {
    
//     const token =  localStorage.getItem('token');
//     const { authBaseUrl, regenerate } = ApiConfig;
//     const url = authBaseUrl + regenerate[type] + id;
//     console.log(url,token,"url---")
//     const params = {};
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${token}`,
//     };
//     return ApiCallGet(url, params, headers);
//   }

//   const downloadMaterialQuestion = async (id,type) => {
    
//     const token =  localStorage.getItem('token');
//     const { authBaseUrl, download } = ApiConfig;
//     const url = authBaseUrl + download[type] + id;
   
//     return { url, token }; 
//   }
//   export { materialQuestion,regenerateMaterialQuestion,downloadMaterialQuestion};