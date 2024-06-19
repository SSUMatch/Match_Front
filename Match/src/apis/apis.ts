import axios from 'axios';

const baseURL = import.meta.env.VITE_APP_BASE_URL;

const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchMatches = async (
  page: number,
  take: number,
  date: string,
) => {
  const response = await apiClient.get('/match', {
    params: {page, take, date},
  });
  if (response.data.code === '200' && response.data.isSuccess) {
    return response.data.data;
  }
  throw new Error(response.data.message || 'Failed to fetch data');
};

export const fetchMatchDetail = async (matchId: number) => {
  const response = await apiClient.get(`/match/detail/${matchId}`);
  if (response.data.code === '200' && response.data.isSuccess) {
    return response.data.data;
  }
  throw new Error(response.data.message || 'Failed to fetch match detail');
};
