// jobsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { getAllJobs } from "../store/Thunks/getAllJobs";

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
    page: 0,
    totalJobs: 0
  },
  extraReducers:(builder) => {
    builder.addCase(getAllJobs.pending, (state) => {
        state.loading = true
    })
    builder.addCase(getAllJobs.fulfilled, (state, action) => {
        state.loading = false
        state.jobs = [...state.jobs, ...action.payload.jdList]
        state.page++
    })
    builder.addCase(getAllJobs.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload.error
    })
  },
});

// const jobsSlice = createSlice({
//   name: 'jobs',
//   initialState: {
//     jobs: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     jobsFetched: (state, action) => {
//       state.jobs = action.payload;
//     },
//     // Add other reducers as needed
//   },
// });

// export const { jobsFetched } = jobsSlice.actions;

// export default jobsSlice.reducer;
