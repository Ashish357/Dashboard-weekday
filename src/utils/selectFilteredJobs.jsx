// selectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectJobs = (state) => state.jobs.jobs;
const selectFilters = (state) => state.filters;

export const selectFilteredJobs = createSelector(
  [selectJobs, selectFilters],
  (jobs, filters) => {
    return jobs.filter((job) => {
      // console.log(filters);
      const matchesRole = filters?.role?.length === 0 || filters?.role?.toLowerCase() == job?.jobRole?.toLowerCase();
      const matchesExperience = filters.experience.length === 0 || filters.experience >= 3 ? job.minExp>=filters.experience : (filters?.experience==null?job.minExp<=filters?.experience:(job.minExp<=filters.experience && filters.experience<=job.maxExp));
      const matchesLocation = filters?.location?.length === 0 || filters?.location?.toLowerCase()== job.location.toLowerCase();
      const matchesSalary = filters.salary.length === 0 || (
        (filters.salary === 10 && job.maxJdSalary <= 10) ||
        (filters.salary === 20 && job?.minJdSalary > 10 && job.maxJdSalary <= 20) ||
        (filters.salary === 50 && job.minJdSalary > 20 && job.maxJdSalary <= 50) ||
        (filters.salary === 51 && job.minJdSalary > 50) // Use 51 for 50+ LPA
      );
      const matchesCompany = filters.company.length === 0 || "fitstok"?.includes(filters?.company?.toLowerCase())
      return matchesRole && matchesExperience && matchesLocation && matchesSalary && matchesCompany;
    });
  }
);
