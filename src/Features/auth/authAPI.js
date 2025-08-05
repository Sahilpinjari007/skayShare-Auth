import API from '../../Utils/axios.js'


export const isExistingUser = async (userData) => {
  const response = await API.post('/api/v1/user/isExistingUser/', userData);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await API.post('/api/v1/user/register/', userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await API.post('/api/v1/user/login/', userData);
  return response.data;
};

export const verifyUserOTP = async (userData) => {
  const response = await API.post('/api/v1/user/verifyOTP/', userData);
  return response.data;
};

export const resendUserOTP = async (userData) => {
  const response = await API.post('/api/v1/user/resendOTP/', userData);
  return response.data;
};

export const reqResetUserPass = async (userData) => {
  const response = await API.post('/api/v1/user/reset-password/', userData);
  return response.data;
};

export const updateUserPass = async (userData) => {
  const response = await API.post('/api/v1/user/update-password/', userData);
  return response.data;
};
