import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let dinamycUrl = url;

  if (country) {
    dinamycUrl = `${url}/countries/${country}`;
  }

  try {
    const response = await axios.get(dinamycUrl);

    return response.data;
  } catch (error) {
    return error;
  }
};
