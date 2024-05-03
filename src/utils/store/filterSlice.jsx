// filtersSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    role: "",
    numberOfEmployees: "",
    experience: "",
    location: "",
    salary: "",
    company: ""
  },
  reducers: {
    setRoleFilter(state, action) {
      state.role = action.payload;
    },
    setNumberOfEmployeesFilter(state, action) {
      state.numberOfEmployees = action.payload;
    },
    setExperienceFilter(state, action) {
      state.experience = action.payload;
    },
    setLocationFilter(state, action) {
      state.location = action.payload;
    },
    setSalaryFilter(state, action) {
      state.salary = action.payload;
    },
    setCompanyFilter(state, action) {
        state.company = action.payload;
    }
  },
});

export const {
  setRoleFilter,
  setNumberOfEmployeesFilter,
  setExperienceFilter,
  setLocationFilter,
  setSalaryFilter,
  setCompanyFilter
} = filtersSlice.actions;

export default filtersSlice.reducer;
