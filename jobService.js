import axios from 'axios';

const getJobs = async (title, location) => {
  const response = await axios.get(`http://localhost:3000/jobs`, {
    params: { title, location }
  });
  return response.data;
};

const createProfile = async (profile) => {
  const response = await axios.post('http://localhost:3000/profile', profile);
  return response.data;
};
