import { ApiConfig } from "../apiCall/apiConfig";
import {
  ApiCallDelete,
  ApiCallGet,
  ApiCallPost,
  ApiCallPatch,
  ApiCallPut,
} from "../apiCall/apiCall";
import localStorage from "@react-native-async-storage/async-storage";

const AuthService = {
  LogIn: async (email, password) => {
    const { authBaseUrl, login } = ApiConfig;
    const url = authBaseUrl + login;
    url, "url=----";
    const params = {
      email: email,
      password: password,
    };
    params, "this is params";

    const headers = {
      "Content-Type": "application/json",
    };
    return ApiCallPost(url, params, headers);
  },
  SignUp: async (data) => {
    const { authBaseUrl, signIn } = ApiConfig;
    const url = authBaseUrl + signIn;

    const params = {
      firstName: data?.firstName,
      lastName: data?.lastName,
      email: data?.email.toLowerCase(),
      password: data?.password,
      confirmPassword: data?.confirmpassword,
      dob: data?.date,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return ApiCallPost(url, params, headers);
  },
  OnBoarding: async (
    selectedval,
    sliderValues,
    item,
    selectedmaturity,
    slectedEducation,option
  ) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, onBoarding } = ApiConfig;
    const url = authBaseUrl + onBoarding;
    const params = {
      userType: selectedval ? selectedval : [],
      ageFrom: sliderValues && sliderValues.length > 0 ? sliderValues[0] : null,
      ageTo: sliderValues && sliderValues.length > 0 ? sliderValues[1] : null,
      teachingTopics: item && item.length > 0 ? item : [],
      contentMaturityRestrictions:
        selectedmaturity && selectedmaturity.length > 0 ? selectedmaturity : [],
      // teachLocation: selectedValues && selectedValues.length > 0 ? selectedValues : [],
      educationalObjectives:
        slectedEducation && slectedEducation.length > 0 ? slectedEducation : [],
        type:option,
      // LearningTopics: selectedTopic && selectedTopic.length > 0 ? selectedTopic : [],
      // PersonaleducationalObj: selectedObjective && selectedObjective.length > 0 ? selectedObjective : [],
    };
    params, "params";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  LearningOnBoarding: async (selectedTopic, selectedObjective,option) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, onBoarding } = ApiConfig;
    const url = authBaseUrl + onBoarding;
    const params = {
      type:option,
      LearningTopics:
        selectedTopic && selectedTopic.length > 0 ? selectedTopic : [],
      PersonaleducationalObj:
        selectedObjective && selectedObjective.length > 0
          ? selectedObjective
          : [],
    };
    params, "params";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Teaching: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, teaching } = ApiConfig;
    const url = authBaseUrl + teaching;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    token, "token";
    return ApiCallGet(url, params, headers);
  },
  Contentmaturity: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Content } = ApiConfig;
    const url = authBaseUrl + Content;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  // TeachingLocations: async () => {
  //   const token = await localStorage.getItem('token');
  //   const { authBaseUrl, Teachinglocations } = ApiConfig;
  //   const url = authBaseUrl + Teachinglocations;
  //   const params = {};
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${token}`,
  //   };
  //   return ApiCallGet(url, params, headers);
  // },

  EducationalObjectives: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Education } = ApiConfig;
    const url = authBaseUrl + Education;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetPost: async (page) => {
    
    const userId =await localStorage.getItem("userId");
    let token = await localStorage.getItem("token");
    const { authBaseUrl, HomeGetPost } = ApiConfig;
    const params = new URLSearchParams();
 
    if (userId) params.append('userId', userId);
    if (page) params.append('page', page);

    const url = `${authBaseUrl}${HomeGetPost}${params.toString() ? `?${params.toString()}` : ''
      }`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, {}, headers);
  },

  getvideoid: async (postId) => {
    let token = await localStorage.getItem("token");
    let userId =await localStorage.getItem("userId");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    token, "token---";
    const { authBaseUrl, homegetvideoid } = ApiConfig;
    const url = authBaseUrl + homegetvideoid + "/" + postId + "?userId=" + userId;
    url, "url----";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  NotIntrested: async (id) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Notintrested } = ApiConfig;
    const url = authBaseUrl + Notintrested;
    const params = {
      postId: id,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  SavePost: async (id) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, PostSave } = ApiConfig;
    const url = authBaseUrl + PostSave;
    const params = {
      postId: id,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Substance: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, SubstanceUser } = ApiConfig;
    const url = authBaseUrl + SubstanceUser;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  MentalHealth: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Health } = ApiConfig;
    const url = authBaseUrl + Health;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  Neuroscience: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Neuro } = ApiConfig;
    const url = authBaseUrl + Neuro;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SocialIssue: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Social } = ApiConfig;
    const url = authBaseUrl + Social;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  InterestFilter: async (
    selectedSubstance,
    selectedHealth,
    selectedneuroscience,
    selectSocialIssue,
    interestsDescription
  ) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Interestfilter } = ApiConfig;
    const url = authBaseUrl + Interestfilter;
    const params = {
      substance:
        selectedSubstance && selectedSubstance.length > 0
          ? selectedSubstance
          : [],
      mentalHealth:
        selectedHealth && selectedHealth.length > 0 ? selectedHealth : [],
      neuroScience:
        selectedneuroscience && selectedneuroscience.length > 0
          ? selectedneuroscience
          : [],
      social:
        selectSocialIssue && selectSocialIssue.length > 0
          ? selectSocialIssue
          : [],
      ...(interestsDescription?.trim().length > 0 && {
        description: interestsDescription,
      }),
    };

    params, "params----";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  SearchResult: async (
    headerSearch,
    isOn,
    chips,
    inputValue,
    selectedAge,
    selectedEngagement,
    selectedDate,
    sliderValue,
    selectedValue,
    selectedAudience
  ) => {
    headerSearch, "headerSearch--12";
    let token = await localStorage.getItem("token");
    const userId =await localStorage.getItem("userId");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }

    const { authBaseUrl, Search } = ApiConfig;

    // Build query parameters dynamically
    const params = new URLSearchParams();

    if (headerSearch) params.append("search", headerSearch);
    if (isOn) params.append("isVerified", isOn);

    if (sliderValue) params.append("difficultyLevel", Number(sliderValue));

    if (selectedValue) params.append("duration", selectedValue);

    if (chips) params.append("topic", chips);

    if (selectedEngagement) params.append("engagement", selectedEngagement);
    

    if (selectedDate) params.append("createdAt", selectedDate);
    if (selectedAudience) params.append("audience", selectedAudience);
    if (selectedAge) {
      params.append("ageRange", selectedAge);
    }
    if (userId) params.append("userId", userId);
    // if (selectedItem) params.append('postId', selectedItem);
    const url = `${authBaseUrl}${Search}${
      params.toString() ? `?${params.toString()}` : ""
    }`;

    // const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    url, params, "url-----";
    return ApiCallGet(url, {}, headers);
  },

  HomeSlider: async () => {
    let token = await localStorage.getItem("token");
    const userId =await localStorage.getItem("userId");
    // console.log(userId, "userId---222"); 
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Slider } = ApiConfig;
    const url = authBaseUrl + Slider;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SearchHistory: async (headerSearch) => {
    headerSearch, "headerSearch---";
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, HistoryList } = ApiConfig;
    const url = authBaseUrl + HistoryList + "?" + "search=" + headerSearch;
    url, "url----";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetFolder: async (value) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, getFolder } = ApiConfig;
    const url = authBaseUrl + getFolder + "?sort=" + value;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  createFolder: async (folders) => {
    const token = await localStorage.getItem("token");
    token, "token";
    const { authBaseUrl, createFolder } = ApiConfig;
    const url = authBaseUrl + createFolder;
    const params = {
      folderName: folders,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  deleteFolder: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, deleteFolders } = ApiConfig;
    const url = authBaseUrl + deleteFolders + id;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallDelete(url, params, headers);
  },

  getReview: async (id) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, getReviews } = ApiConfig;
    const url = authBaseUrl + getReviews + id;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  getSubFolderVideos: async (folderId, subFolderId) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, subfolderSaveVideo } = ApiConfig;
    const url = authBaseUrl + subfolderSaveVideo + folderId + `/${subFolderId}`;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  sendComment: async (commentText, PostId) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, comment } = ApiConfig;
    const url = authBaseUrl + comment;
    const params = {
      post: PostId,
      content: commentText,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  LikeReview: async (likeId) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, reviewLike } = ApiConfig;
    const url = authBaseUrl + reviewLike + likeId;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  dislikeReview: async (likeId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, rewiewDislike } = ApiConfig;
    const url = authBaseUrl + rewiewDislike + likeId;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  editProfile: async (
    selected,
    selected1,
    selected2,
    phoneNumber,
    school,
    minAge,
    maxAge,
    profileInfo
  ) => {
    phoneNumber, "phoneNumber";
    const token = await localStorage.getItem("token");
    const { authBaseUrl, profileEdit } = ApiConfig;
    const url = authBaseUrl + profileEdit;
    const params = {
      phone: phoneNumber,
      school: school,
      ageFrom: minAge ? minAge : profileInfo?.onboarding?.ageFrom,
      ageTo: maxAge ? maxAge : profileInfo?.onboarding?.ageTo,
      contentMaturityRestrictions: selected1
        ? selected1
        : profileInfo?.onboarding?.contentMaturityRestrictions,
      teachingTopics: selected
        ? selected
        : profileInfo?.onboarding?.teachingTopics,

      educationalObjectives: selected2
        ? selected2
        : profileInfo?.onboarding?.educationalObjectives,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  userInfo: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, profileInfo } = ApiConfig;
    const url = authBaseUrl + profileInfo;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  renames: async (rename, id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, RenameFolder } = ApiConfig;
    const url = authBaseUrl + RenameFolder + id;
    const params = {
      folderName: rename,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  Interest: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, onBoardingInterest } = ApiConfig;
    const url = authBaseUrl + onBoardingInterest;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  objective: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, educationalObjective } = ApiConfig;
    const url = authBaseUrl + educationalObjective;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetSaveVideo: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, saveVideo } = ApiConfig;
    const url = authBaseUrl + saveVideo + id;
    url, "url----";

    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  WatchHistory: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, watchHistoryVideo } = ApiConfig;
    const url = authBaseUrl + watchHistoryVideo;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  LibraryVideo: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, myLibraryVideo } = ApiConfig;
    const url = authBaseUrl + myLibraryVideo;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SaveVideo: async (selectedFolderId, postId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, saveVideos } = ApiConfig;
    const url = authBaseUrl + saveVideos;
    console.log(selectedFolderId, postId,"selectedFolderId, postId-----")
    const params = {
      folderId: selectedFolderId,
      _id: postId,
    };

    params, "params---";

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Notintrested: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, notIntrestedTopic } = ApiConfig;
    const url = authBaseUrl + notIntrestedTopic;
    url, "url----";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  ReportPost: async (selectedValues, text, id) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, reportPost } = ApiConfig;
    const url = authBaseUrl + reportPost;
    const params = {
      postId: id,
      reportType: selectedValues,
      description: text,
    };
    params, "params----";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  SharePost: async (id, selectedTopics) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, sharePost } = ApiConfig;
    const url = authBaseUrl + sharePost;
    const params = {
      postId: id,
      options: selectedTopics,
    }(params, "params----");
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  SaveInt: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, SaveIntrest } = ApiConfig;
    const url = authBaseUrl + SaveIntrest;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  TopicPost: async () => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }

    const { authBaseUrl, TopicCode } = ApiConfig;
    const url = authBaseUrl + TopicCode;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  MoreLike: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, MoreLIkeThis } = ApiConfig;
    const url = authBaseUrl + MoreLIkeThis;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestList: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, requestGetList } = ApiConfig;
    const url = authBaseUrl + requestGetList;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  CreateRequest: async (yourRequest, discription, avoided, details) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, Createrequest } = ApiConfig;
    const url = authBaseUrl + Createrequest;
    const params = {
      title: yourRequest,
      description: discription,
      avoidedDetails: avoided,
      addDetails: details,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  GetSubFolder: async (id, value) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, GetSubFolders } = ApiConfig;
    const url = authBaseUrl + GetSubFolders + id + "?sort=" + value;
    url, "url----";

    const params = {};
    params, "params---";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  createSubFolder: async (id, addnewFolder) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, createSubFolder } = ApiConfig;
    const url = authBaseUrl + createSubFolder + id;
    const params = {
      subfolderName: addnewFolder,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  DeleteSubFolder: async (id,SubFolderId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, deleteSubFolder } = ApiConfig;
    const url = authBaseUrl + deleteSubFolder + id + "/" + SubFolderId;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallDelete(url, params, headers);
  },

  RenameSubFolder: async (id,rename,selectedFolderId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, renameSubFolder } = ApiConfig;
    const url = authBaseUrl + renameSubFolder + selectedFolderId + "/" + id;
    const params = {
      subfolderName: rename,
    }
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  getSubfolderSaveVideo: async (folderId, subfolderId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, subfolderSaveVideo } = ApiConfig;
    const url = authBaseUrl + subfolderSaveVideo + folderId + "/" + subfolderId;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  getSuggested: async (postId) => {
    let token = await localStorage.getItem("token");
    const userId =await localStorage.getItem("userId");
    const { authBaseUrl, Suggested } = ApiConfig;
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    const url = `${authBaseUrl}${Suggested}${postId}${params.toString() ? `?${params.toString()}` : ''}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, {}, headers);
  },
  NotIntrested: async (id) => {
    // (id, "id----")
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, Notintrested } = ApiConfig;
    const url = authBaseUrl + Notintrested;
    const params = {
      postId: id,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    // (url, params, headers,"fkk");
    return ApiCallPost(url, params, headers);
  },
  SaveSubFolderVideo: async (postId,selectSubFolder,selectFolder) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, saveSubFolderVideo } = ApiConfig;
    const url = authBaseUrl + saveSubFolderVideo + "/" + selectFolder;

    const params = {
      subfolderId: selectSubFolder,
      postId: postId,
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  GetCategories: async (category) => {
    let token = await localStorage.getItem("token");
    const userId =await localStorage.getItem("userId");
    const { authBaseUrl, getCategories } = ApiConfig;
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    if (category) params.append('category', category);
    const url = `${authBaseUrl}${getCategories}${params.toString() ? `?${params.toString()}` : ''}`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    return ApiCallGet(url, {}, headers);
  },

  GetCategorie: async (value1) => {
    value1, "value of selectide category -----";
    const token = await localStorage.getItem("token");
    const { authBaseUrl, getCategories } = ApiConfig;

    // (categoryValue,"categoryValue----")

    const url = `${authBaseUrl}${getCategories}?category=${value1}`;
    url, "url----";

    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };

    return ApiCallGet(url, params, headers);
  },

  CategoryVideoList: async () => {
    let token = await localStorage.getItem("token");
    const userId =await localStorage.getItem("userId");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, categoriesVideo } = ApiConfig;
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    const url = `${authBaseUrl}${categoriesVideo}${params.toString() ? `?${params.toString()}` : ''}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, {}, headers);
  },
  replayPost: async (id, reply) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, replayOnPost } = ApiConfig;
    const url = authBaseUrl + replayOnPost;
    const params = {
      reviewId: id,
      content: reply,
    };
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  getVideoRequest: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, getVideoInRequest } = ApiConfig;
    const url = authBaseUrl + getVideoInRequest + id;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestVideo: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, requestVideo } = ApiConfig;
    const url = authBaseUrl + requestVideo;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestSaveVideo: async (selectedItems,id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, requestSaveVideo } = ApiConfig;
    const url = authBaseUrl + requestSaveVideo + id;

    const params = {
       videoIds: Array.isArray(selectedItems) ? selectedItems : [selectedItems],
    };

    params, "params---";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  getQuize: async (id) => {
    let token = await localStorage.getItem("token");
    let userId =await localStorage.getItem("userId");
    const { authBaseUrl, Quiz } = ApiConfig;
    const params = new URLSearchParams();
    if (userId) params.append('userId', userId);
    const url = `${authBaseUrl}${Quiz}${id}${params.toString() ? `?${params.toString()}` : ''}`;
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, {}, headers);
  },

  getDiscusion: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, Discussion } = ApiConfig;
    const url = authBaseUrl + Discussion + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  getActivity: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, Activity } = ApiConfig;
    const url = authBaseUrl + Activity + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },
  getHomeWork: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, Homework } = ApiConfig;
    const url = authBaseUrl + Homework + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  getTest: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, Test } = ApiConfig;
    const url = authBaseUrl + Test + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },
  
   getQuizPdf : async (id) => {
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, QuizPdf } = ApiConfig;
    const url = authBaseUrl + QuizPdf + id;
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
     return response.arrayBuffer();
  },

  getDiscussionPdf : async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, DiscussionPdf } = ApiConfig;
    const url = authBaseUrl + DiscussionPdf + id;
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
     return response.arrayBuffer();
  },

  getActivityPdf : async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, ActivityPdf } = ApiConfig;
    const url = authBaseUrl + ActivityPdf + id;
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
     return response.arrayBuffer();
  },

  getHomeWorkPdf : async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, HomeworkPdf } = ApiConfig;
    const url = authBaseUrl + HomeworkPdf + id;
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
     return response.arrayBuffer();
  },

  getTestPdf : async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, TestPdf } = ApiConfig;
    const url = authBaseUrl + TestPdf + id;
  
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  
     return response.arrayBuffer();
  },
 

  QuizRegenerate: async (id) => { 
    let token = await localStorage.getItem("token");
    if (!token) {
      token = await localStorage.getItem("unAuthToken");
    }
    const { authBaseUrl, quiz } = ApiConfig;
    const url = authBaseUrl + quiz + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  DiscussionRegenerate: async (id) => { 
    const token = await localStorage.getItem("token");
    const { authBaseUrl, discussion } = ApiConfig;
    const url = authBaseUrl + discussion + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  ActivityRegenerate: async (id) => { 
    const token = await localStorage.getItem("token");
    const { authBaseUrl, activity } = ApiConfig;
    const url = authBaseUrl + activity + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  HomeWorkRegenerate: async (id) => { 
    const token = await localStorage.getItem("token");
    const { authBaseUrl, homework } = ApiConfig;
    const url = authBaseUrl + homework + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },
  
  TestRegenerate: async (id) => { 
    const token = await localStorage.getItem("token");
    const { authBaseUrl, test } = ApiConfig;
    const url = authBaseUrl + test + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  removeSuggation: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, RemoveSaggation } = ApiConfig;
    const url = authBaseUrl + RemoveSaggation;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  getReviewReply: async (reviewId) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, getReviewsReply } = ApiConfig;
    const url = authBaseUrl + getReviewsReply + reviewId;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetOneVideo: async (id) => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, getOneVideo } = ApiConfig;
    const url = authBaseUrl + getOneVideo + id;
    url, "url---";
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SkipData: async () => {
    const token = await localStorage.getItem("token");
    const { authBaseUrl, skipData } = ApiConfig;
    const url = authBaseUrl + skipData;
    const params = {};
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GoogleLogin: async (accessToken) => {
    const { authBaseUrl, google } = ApiConfig;
    const url = authBaseUrl + google;

    const params = {
      token: accessToken,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return ApiCallPost(url, params, headers);
  },

  saveSearchHistory: async (val,postid) => {
    console.log(postid, "postid----")
    const token = await localStorage.getItem('token');
    const id =  await localStorage.getItem('userId');
    const { authBaseUrl, saveSearchHistory } = ApiConfig;
    const url =  `${authBaseUrl}${saveSearchHistory}?userId=${id}`;

    const params = {
      search:val,
      postId:postid,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  UpdateProfileImage: async (data, type) => {
    const token = await localStorage.getItem('token');
    const formData = new FormData();
    formData.append('image', {
      uri: data?.uri,
      type: data?.type, // Change the type according to your requirements
      name: data?.fileName,
    });

    // const email = await AsyncStorage.getItem('email');
    const { authBaseUrl, profileEdit } = ApiConfig;
    const url = authBaseUrl + profileEdit;
    
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, formData, headers);
  },
};
export default AuthService;
export const Logout = () => {
  localStorage.clear();
};
