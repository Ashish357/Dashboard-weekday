// selectors.js
import { createSelector } from '@reduxjs/toolkit';

const selectJobs = (state) => state.jobs.jobs;
const selectFilters = (state) => state.filters;

export const selectFilteredJobs = createSelector(
  [selectJobs, selectFilters],
  (jobs, filters) => {
    return jobs.filter((job) => {
      const matchesRole = filters.role.length === 0 || filters.role.includes(job.role);
      const matchesNumberOfEmployees = filters.numberOfEmployees.length === 0 || filters.numberOfEmployees.includes(job.numberOfEmployees);
      const matchesExperience = filters.experience.length === 0 || filters.experience.includes(job.experience);
      const matchesLocation = filters.location.length === 0 || filters.location.includes(job.location);
      const matchesSalary = filters.salary.length === 0 || filters.salary.includes(job.salary);
      const matchesCompany = filters.company.length === 0 || filters.company.includes(job.company);
      return matchesRole && matchesNumberOfEmployees && matchesExperience && matchesLocation && matchesSalary && matchesCompany;
    });
  }
);
