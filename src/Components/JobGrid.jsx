import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import JobCard from './JobCard';
import {useDispatch, useSelector} from 'react-redux'
// import { useFetchJobs } from '../utils/hooks/useFetchJobs';
import { selectFilteredJobs } from '../utils/selectFilteredJobs';
import { getAllJobs } from '../utils/store/Thunks/getAllJobs';
import Shimmer from './Shimmer';

const JobGrid = () => {
    const { page, loading } = useSelector((state) => state.jobs);
    const [jobs, setJobs] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllJobs(page));
    }, [])
    const filteredJobs = useSelector(selectFilteredJobs);

    useEffect(() => {
        // Reset jobs state with filtered jobs whenever filteredJobs changes
        setJobs(filteredJobs);
    }, [filteredJobs]);

    let fetchData = true;

    const handleInfiniteScroll = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            if (fetchData) {
              fetchData = false;
              dispatch(getAllJobs(page)).then(() => {
                fetchData = true;
              });
            }
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        window.addEventListener("scroll", handleInfiniteScroll);
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
      }, []);

    if(loading) return (
        <div>
            <Shimmer />
        </div>
    )

    console.log(filteredJobs.length);
    return (
        <Grid container spacing={5} style={{marginTop:'2px'}}>
            {jobs.length != 0 ? filteredJobs.map(job => (
            <Grid key={job.jdUid+Math.random()} item xs={12} sm={6} md={4}>
                {/* {console.log(called0)} */}
                <JobCard jobData={job} />
            </Grid>
            )):
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                marginBlock: '100px'
            }}>
               <h1>No Jobs Found</h1>
            </div> }
        </Grid>
    )
};
export default JobGrid;