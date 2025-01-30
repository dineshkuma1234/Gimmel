import axios from 'axios';


export const ApiCallPost = async (url, parameters, headers) => {
  try {
    const response = await axios.post(url, parameters, {headers: headers});
    return response?.data;
  } catch (error) {
    return error?.response?.data;
  }
};
export const ApiCallGet = async (url, parameters, headers) => {
  console.log(url,"url")
  try {
    const response = await axios.get(url, {
      params: parameters,
      headers: headers,
    });
    return response?.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      const { status, data } = error.response;
  
      console.error(`Error Status: ${status}`);
      console.error(`Error Response: ${JSON.stringify(data)}`);
  
      // Handle specific status codes
      if (status === 500) {
        return "Something went wrong.";
      }
  
      // Return generic message for other errors
      return data?.message;
    }
  
    // Handle errors without a response (e.g., network issues)
    return { error: error.message || "An unexpected error occurred." };
  }
};

// delete Api for send data to body
export const ApiCallDelete = async (url, parameters, headers) => {
  try {
    const response = await axios.delete(url, {
      headers: headers,
      data: parameters,
    });
    console.log(response, 'in axiosget function');
    return response?.data;
  } catch (error) {
    console.log(error, 'eroor in axios');
    console.error('API Call Error:', error.response?.data || error.message);
    return error;
  }
};

export const ApiCallPut = async (url, parameters, headers) => {
  try {
    const response = await axios.put(url, parameters, {headers: headers});

    // Log response details
    console.log('API Call Response:', response);

    return response?.data;
  } catch (error) {
    // Log the complete error response
    console.error('API Call Error:', error.response?.data || error.message);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

// PATCH API function
export const ApiCallPatch = async (url, parameters, headers) => {
  try {
    const response = await axios.patch(url, parameters, {headers: headers});

    // Log response details
    console.log('API Call Response (PATCH):', response);

    return response?.data;
  } catch (error) {
    // Log the complete error response
    console.error(
      'API Call Error (PATCH):',
      error.response?.data || error.message,
    );
    throw error; // Re-throw the error to propagate it to the caller
  }
};
