import { ApiConfig } from '../apiCall/apiConfig';
import {
  ApiCallDelete,
  ApiCallGet,
  ApiCallPost,
  ApiCallPatch,
  ApiCallPut,
} from '../apiCall/apiCall';
import localStorage from '@react-native-async-storage/async-storage';


const AuthService = {
  LogIn: async (email, password) => {
    const { authBaseUrl, login } = ApiConfig;
    const url = authBaseUrl + login;
    console.log(url,"url=----")
    const params = {
      email: email,
      password: password,
    };
    console.log(params,"this is params");
    
    const headers = {
      'Content-Type': 'application/json',
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
      'Content-Type': 'application/json',
    };
    return ApiCallPost(url, params, headers);
  },
  OnBoarding: async (selectedval,sliderValues,item,selectedmaturity,slectedEducation) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, onBoarding } = ApiConfig;
    const url = authBaseUrl + onBoarding;
    const params = {
      userType: selectedval ? selectedval : [],
      ageFrom: sliderValues && sliderValues.length > 0 ? sliderValues[0] : null,
      ageTo: sliderValues && sliderValues.length > 0 ? sliderValues[1] : null,
      teachingTopics: item && item.length > 0 ? item : [],
      contentMaturityRestrictions: selectedmaturity && selectedmaturity.length > 0 ? selectedmaturity : [],
      // teachLocation: selectedValues && selectedValues.length > 0 ? selectedValues : [],
      educationalObjectives: slectedEducation && slectedEducation.length > 0 ? slectedEducation : [],
      // LearningTopics: selectedTopic && selectedTopic.length > 0 ? selectedTopic : [],
      // PersonaleducationalObj: selectedObjective && selectedObjective.length > 0 ? selectedObjective : [],
    };
    console.log(params, 'params');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  LearningOnBoarding: async (selectedTopic, selectedObjective) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, onBoarding } = ApiConfig;
    const url = authBaseUrl + onBoarding;
    const params = {
      LearningTopics: selectedTopic && selectedTopic.length > 0 ? selectedTopic : [],
      PersonaleducationalObj: selectedObjective && selectedObjective.length > 0 ? selectedObjective : [],
    };
    console.log(params, 'params');
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Teaching: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, teaching } = ApiConfig;
    const url = authBaseUrl + teaching;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    console.log(token, 'token');
    return ApiCallGet(url, params, headers);
  },
  Contentmaturity: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Content } = ApiConfig;
    const url = authBaseUrl + Content;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
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
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Education } = ApiConfig;
    const url = authBaseUrl + Education;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetPost: async (page) => {
    const token = await localStorage.getItem('token');
    console.log(token, 'token---');
    const { authBaseUrl, HomeGetPost } = ApiConfig;
    const url = authBaseUrl + HomeGetPost + '?page=' + page;
    console.log(url, 'url----');
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  NotIntrested: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Notintrested } = ApiConfig;
    const url = authBaseUrl + Notintrested;
    const params = {
      postId: id,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  SavePost: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, PostSave } = ApiConfig;
    const url = authBaseUrl + PostSave;
    const params = {
      postId: id,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Substance: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, SubstanceUser } = ApiConfig;
    const url = authBaseUrl + SubstanceUser;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  MentalHealth: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Health } = ApiConfig;
    const url = authBaseUrl + Health;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  Neuroscience: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Neuro } = ApiConfig;
    const url = authBaseUrl + Neuro;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SocialIssue: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Social } = ApiConfig;
    const url = authBaseUrl + Social;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  InterestFilter: async (selectedSubstance, selectedHealth, selectedneuroscience, selectSocialIssue, interestsDescription) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Interestfilter } = ApiConfig;
    const url = authBaseUrl + Interestfilter;
    const params = {
      substance: selectedSubstance && selectedSubstance.length > 0 ? selectedSubstance : [],
      mentalHealth: selectedHealth && selectedHealth.length > 0 ? selectedHealth : [],
      neuroScience: selectedneuroscience && selectedneuroscience.length > 0 ? selectedneuroscience : [],
      social: selectSocialIssue && selectSocialIssue.length > 0 ? selectSocialIssue : [],
      description: interestsDescription && interestsDescription.trim().length > 0 ? interestsDescription : '',
  };

    console.log(params,"params----")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  SearchResult: async (
    searchValue,
    isOn,
    sliderValue,
    selectedValue,
    chips,
    engagementRate,
    datePublished,
    primaryAudience,
    selectedAgeRequirement,
    selectedItem
  ) => {
    console.log(searchValue,
      isOn,
      sliderValue,
      selectedValue,
      chips,
      engagementRate,
      datePublished,
      primaryAudience,
      selectedAgeRequirement,
      selectedItem, 'selectedItem----');
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Search } = ApiConfig;

    // Build query parameters dynamically
    const params = new URLSearchParams();

    if (searchValue) params.append('search', searchValue);
    if (isOn) params.append('isVerified', isOn);
    if (sliderValue) params.append('difficultyLevel', sliderValue);
    if (selectedValue) params.append('duration', selectedValue);
    if (chips) params.append('topic', chips);
    if (engagementRate) params.append('engagement', engagementRate);
    if (datePublished) params.append('createdAt', datePublished);
    if (primaryAudience) params.append('audience', primaryAudience);
    if (selectedAgeRequirement && selectedAgeRequirement.isSelected) {
      params.append('ageRange', selectedAgeRequirement.value);
    }
    if (selectedItem) params.append('postId', selectedItem);

    const url = `${authBaseUrl}${Search}${params.toString() ? `?${params.toString()}` : ''
      }`;

    console.log(url, "url-----")
    // const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    console.log(url, "url---");
    return ApiCallGet(url, params, headers);
  },




  HomeSlider: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Slider } = ApiConfig;
    const url = authBaseUrl + Slider;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SearchHistory: async (headerSearch) => {
    console.log(headerSearch, "headerSearch---")
    const token = await localStorage.getItem('token');
    const { authBaseUrl, HistoryList } = ApiConfig;
    const url = authBaseUrl + HistoryList + '?' + 'search=' + headerSearch;
    console.log(url, "url----")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetFolder: async (value) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getFolder } = ApiConfig;
    const url = authBaseUrl + getFolder + "?sort=" + value;
    console.log(url, "url---")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  createFolder: async (addnewFolder) => {
    const token = await localStorage.getItem('token');
    console.log(token, 'token');
    const { authBaseUrl, createFolder } = ApiConfig;
    const url = authBaseUrl + createFolder;
    const params = {
      folderName: addnewFolder,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  deleteFolder: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, deleteFolders } = ApiConfig;
    const url = authBaseUrl + deleteFolders + id;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallDelete(url, params, headers);
  },

  getReview: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getReviews } = ApiConfig;
    const url = authBaseUrl + getReviews + id;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  sendComment: async (commentText, PostId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, comment } = ApiConfig;
    const url = authBaseUrl + comment;
    const params = {
      post: PostId,
      content: commentText,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  LikeReview: async (likeId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, reviewLike } = ApiConfig;
    const url = authBaseUrl + reviewLike + likeId;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  dislikeReview: async (likeId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, rewiewDislike } = ApiConfig;
    const url = authBaseUrl + rewiewDislike + likeId;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  editProfile: async (selectedHealth, selectContent, selectObjective, selectstate, phoneNumber, schoolName, minAge, maxAge, profileInfo) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, profileEdit } = ApiConfig;
    const url = authBaseUrl + profileEdit;
    const params = {
      phone: phoneNumber?.value,
      school: schoolName?.value,
      ageFrom: minAge
        ? minAge
        : profileInfo?.onboarding?.ageFrom,
      ageTo: maxAge
        ? maxAge
        : profileInfo?.onboarding?.ageTo,
      contentMaturityRestrictions: selectContent
        ? selectContent
        : profileInfo?.onboarding?.contentMaturityRestrictions,
      teachingTopics: selectedHealth
        ? selectedHealth
        : profileInfo?.onboarding?.teachingTopics,
      teachLocation: selectstate
        ? selectstate
        : profileInfo?.onboarding?.teachLocation,
      educationalObjectives: selectObjective
        ? selectObjective
        : profileInfo?.onboarding?.educationalObjectives,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  userInfo: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, profileInfo } = ApiConfig;
    const url = authBaseUrl + profileInfo;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  renames: async (rename, id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, RenameFolder } = ApiConfig;
    const url = authBaseUrl + RenameFolder + id;
    const params = {
      folderName: rename,
    };
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  Interest: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, onBoardingInterest } = ApiConfig;
    const url = authBaseUrl + onBoardingInterest;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  objective: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, educationalObjective } = ApiConfig;
    const url = authBaseUrl + educationalObjective;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetSaveVideo: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, saveVideo } = ApiConfig;
    const url = authBaseUrl + saveVideo + id;
    console.log(url, 'url----');

    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  WatchHistory: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, watchHistoryVideo } = ApiConfig;
    const url = authBaseUrl + watchHistoryVideo;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  LibraryVideo: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, myLibraryVideo } = ApiConfig;
    const url = authBaseUrl + myLibraryVideo;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SaveVideo: async (selectedFolderId, postId) => {
    console.log(selectedFolderId, postId, "selectedFolderId postId ----")
    const token = await localStorage.getItem('token');
    const { authBaseUrl, saveVideos } = ApiConfig;
    const url = authBaseUrl + saveVideos;

    const params = {
      folderId: selectedFolderId,
      _id: postId,
    };

    console.log(params, "params---")

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  Notintrested: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, notIntrestedTopic } = ApiConfig;
    const url = authBaseUrl + notIntrestedTopic;
    console.log(url, "url----")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  ReportPost: async (reportDiscription, selectedValues, id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, reportPost } = ApiConfig;
    const url = authBaseUrl + reportPost;
    const params = {
      postId: id,
      reportType: selectedValues[0],
      description: reportDiscription
    };
    console.log(params, "params----")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  SharePost: async (id, selectedTopics) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, sharePost } = ApiConfig;
    const url = authBaseUrl + sharePost;
    const params = {
      postId: id,
      options: selectedTopics
    }
    console.log(params, "params----")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  SaveInt: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, SaveIntrest } = ApiConfig;
    const url = authBaseUrl + SaveIntrest;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  TopicPost: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, TopicCode } = ApiConfig;
    const url = authBaseUrl + TopicCode;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  MoreLike: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, MoreLIkeThis } = ApiConfig;
    const url = authBaseUrl + MoreLIkeThis;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestList: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, requestGetList } = ApiConfig;
    const url = authBaseUrl + requestGetList;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  CreateRequest: async (yourRequest, discription, avoided, details) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, Createrequest } = ApiConfig;
    const url = authBaseUrl + Createrequest;
    const params = {
      title: yourRequest,
      description: discription,
      avoidedDetails: avoided,
      addDetails: details
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  GetSubFolder: async (id, value) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, GetSubFolders } = ApiConfig;
    const url = authBaseUrl + GetSubFolders + id + "?sort=" + value;
    console.log(url, 'url----');

    const params = {};
    console.log(params, "params---")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  createSubFolder: async (id, addnewFolder) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, createSubFolder } = ApiConfig;
    const url = authBaseUrl + createSubFolder + id;
    const params = {
      subfolderName: addnewFolder
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  DeleteSubFolder: async (id, subId) => {
    console.log(subId,"subId----")
    const token = await localStorage.getItem('token');
    const { authBaseUrl, deleteSubFolder } = ApiConfig;
    const url = authBaseUrl + deleteSubFolder + id + "/" + subId?._id;
    console.log(url,"url----")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallDelete(url, params, headers);
  },

  RenameSubFolder: async (id, rename, SubId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, renameSubFolder } = ApiConfig;
    const url = authBaseUrl + renameSubFolder + id + "/" + SubId?._id;
    console.log(url, "url----")
    const params = {
      subfolderName: rename
    }
    console.log(params, "params--")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPut(url, params, headers);
  },

  getSubfolderSaveVideo: async (folderId, subfolderId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, subfolderSaveVideo } = ApiConfig;
    const url = authBaseUrl + subfolderSaveVideo + folderId + "/" + subfolderId;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SaveSubFolderVideo: async (selectedFolderId, id, postId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, saveSubFolderVideo } = ApiConfig;
    const url = authBaseUrl + saveSubFolderVideo + "/" + id;
    console.log(url, "url---")
    const params = {
      subfolderId: selectedFolderId,
      postId: postId
    }
    console.log(params, "params----")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  GetCategories: async (value1, value2, value3) => {
    console.log(value1, value2, value3, "value of selectide category -----")
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getCategories } = ApiConfig;

    // Determine which value to append based on the selected value
    let categoryValue = '';

    if (value1 && !value2 && !value3) {
      categoryValue = value1;
    } else if (!value1 && value2 && !value3) {
      categoryValue = value2;
    } else if (!value1 && !value2 && value3) {
      categoryValue = value3;
    } else {
      console.error("Invalid or multiple selections detected.");
      return;
    }

    console.log(categoryValue, "categoryValue----")

    const url = `${authBaseUrl}${getCategories}?category=${categoryValue}`;
    console.log(url, "url----")

    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return ApiCallGet(url, params, headers);
  },


  GetCategorie: async (value1) => {
    console.log(value1, "value of selectide category -----")
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getCategories } = ApiConfig;

    // console.log(categoryValue,"categoryValue----")

    const url = `${authBaseUrl}${getCategories}?category=${value1}`;
    console.log(url, "url----")

    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return ApiCallGet(url, params, headers);
  },

  CategoryVideoList: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, categoriesVideo } = ApiConfig;
    const url = authBaseUrl + categoriesVideo;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },
  replayPost: async (id, reply) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, replayOnPost } = ApiConfig;
    const url = authBaseUrl + replayOnPost;
    const params = {
      reviewId: id,
      content: reply,
    }
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  getVideoRequest: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getVideoInRequest } = ApiConfig;
    const url = authBaseUrl + getVideoInRequest + id;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestVideo: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, requestVideo } = ApiConfig;
    const url = authBaseUrl + requestVideo;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  RequestSaveVideo: async (selectedItems, id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, requestSaveVideo } = ApiConfig;
    const url = authBaseUrl + requestSaveVideo + id;

    const params = {
      videoIds: selectedItems
    };

    console.log(params, "params---")
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },

  getQuize: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, quiz } = ApiConfig;
    const url = authBaseUrl + quiz + id;
    console.log(url,"url---")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },
  removeSuggation: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, RemoveSaggation } = ApiConfig;
    const url = authBaseUrl + RemoveSaggation;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallPost(url, params, headers);
  },
  getReviewReply: async (reviewId) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getReviewsReply } = ApiConfig;
    const url = authBaseUrl + getReviewsReply + reviewId;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GetOneVideo: async (id) => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, getOneVideo } = ApiConfig;
    const url = authBaseUrl + getOneVideo + id;
    console.log(url, "url---")
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  SkipData: async () => {
    const token = await localStorage.getItem('token');
    const { authBaseUrl, skipData } = ApiConfig;
    const url = authBaseUrl + skipData;
    const params = {};
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    return ApiCallGet(url, params, headers);
  },

  GoogleLogin: async (accessToken) => {
    const { authBaseUrl, google } = ApiConfig;
    const url = authBaseUrl + google;

    const params = {
      token:accessToken
    };
    const headers = {
      'Content-Type': 'application/json',
    };
    return ApiCallPost(url, params, headers);
  },
};
export default AuthService;
export const Logout = () => {
  localStorage.clear();
};
