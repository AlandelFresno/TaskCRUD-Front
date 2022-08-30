import axios from 'axios';

const fetchAPI = async ({
  url = '/',
  method = 'get',
  data = {},
  params = {},
  headers = {},
}) => {
  return await axios({
    baseURL: `${process.env.BASEAPIURL}/api`,
    url,
    method,
    data,
    params,
    headers,
  });
};
export default fetchAPI;
