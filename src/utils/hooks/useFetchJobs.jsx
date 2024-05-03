// useFetchJobs.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jobsFetched } from './jobsSlice';
import { JobsURL } from '../constants';

export const useFetchJobs = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const raw = JSON.stringify({
          "limit": 9,
          "offset": pageNumber
      });

      const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw
      };
      const data = await fetch(
          JobsURL, requestOptions
      );
      const json = await data.json();
      dispatch(jobsFetched(json));
    } catch (error) {
      // console.error('Failed to fetch jobs:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [dispatch]);
};
