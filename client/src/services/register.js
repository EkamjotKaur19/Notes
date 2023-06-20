import axios from 'axios'
const baseUrl = 'https://ekams-notes.onrender.com/api/users'

const register= async (request) => {
  const response = await axios.post(baseUrl,  request)
  return response.data
}

const getUserByUsername = async (username) => {
  const response = await axios.get(`${baseUrl}?username=${username}`);
  return response.data;
};

export default { register, getUserByUsername };