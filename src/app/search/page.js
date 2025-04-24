// "use client";
// import React, { useState, useEffect, useContext } from "react";
// import { useRouter } from "next/navigation"; // ✅ Import router
// import AuthService from "../../services/AuthService";
// import Search from "../(MobileFlow)/searchdata/page";
// import { SearchListContext } from "../Context/searchlist/searchListContext";
// import toast, { Toaster } from "react-hot-toast";

// export default function SearchScreen() {
//   const router = useRouter(); // ✅ Initialize router
//   const [historyList, setHistoryList] = useState([]);
//   const [searchListState, updatesearchListState] = useContext(SearchListContext);
//   const [headerSearch, setHeaderSearch] = useState("");

//   useEffect(() => {
//     if (headerSearch) {
//       handleHistoryList(headerSearch);
//     }
//   }, [headerSearch]);

//   // ✅ Fixed missing closing bracket in handleHistoryList
//   const handleHistoryList = async (headerSearch) => {
//     try {
//       const result = await AuthService.SearchHistory(headerSearch);
//       if (result?.success) {
//         setHistoryList(result?.data?.data || []);
//       } else {
//         toast.error(result?.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   // ✅ Fixed router reference and ensured client-side execution
//   const handleSearchCont = async (
//     headerSearch,
//     isOn,
//     chips,
//     inputValue,
//     selectedAge,
//     selectedEngagement,
//     selectedDate,
//     sliderValue,
//     selectedValue,
//     selectedAudience
//   ) => {
//     try {
//       const result = await AuthService.SearchResult(
//         headerSearch,
//         isOn,
//         chips,
//         inputValue,
//         selectedAge,
//         selectedEngagement,
//         selectedDate,
//         sliderValue,
//         selectedValue,
//         selectedAudience
//       );

//       if (result?.success) {
//         if (result?.data?.length <= 0) {
//           toast.error("No data found", { className: "custom-toast" });
//         } else {
//           updatesearchListState(result?.data);

//           // ✅ Ensure router.push() runs only on the client side
//           if (typeof window !== "undefined") {
//             router.push("/search/searchlist", {
//               data: JSON.stringify(result?.data),
//             });
//           }
//         }
//       } else {
//         toast.error(result?.message || "Error fetching search results");
//       }
//     } catch (error) {
//       console.error("Error occurred:", error);
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-right" reverseOrder={false} />
//       <Search
//         historyList={historyList}
//         headerSearch={headerSearch}
//         setHeaderSearch={setHeaderSearch}
//         handleHistoryList={handleHistoryList}
//       />
//     </>
//   );
// }
