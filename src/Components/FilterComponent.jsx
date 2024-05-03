import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setRoleFilter, setLocationFilter, setExperienceFilter, setSalaryFilter, setCompanyFilter } from '../utils/store/filterSlice';
import { FormControl, InputLabel, Select, MenuItem, Button, TextField } from '@mui/material';
import _debounce from '../utils/debounce';

const FiltersComponent = () => {
  const dispatch = useDispatch();
  const [role, setRole] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    dispatch(setRoleFilter(event.target.value));
  };

  const handleNumberOfEmployeesChange = (event) => {
    setNumberOfEmployees(event.target.value);
    // dispatch(setExperienceFilter(event.target.value))
  };

  const handleExperienceChange = (event) => {
    setExperience(event.target.value);
    dispatch(setExperienceFilter(event.target.value));
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    dispatch(setLocationFilter(event.target.value));
  };

  const handleSalaryChange = (event) => {
    setSalary(event.target.value);
    dispatch(setSalaryFilter(event.target.value));
  };

  const handleCompanyChange = (event) =>{
    // console.log(event.target.value);
    setCompany(event.target.value);
    debouncedSearch(event)
    // dispatch(setCompanyFilter(event.target.value))
  }

  const debouncedSearch = _debounce((event)=>{
    dispatch(setCompanyFilter(event[0].target.value))
  },300)

  return (
    <div style={{marginTop:'5px'}}>
      {/* Role Filter */}
      <FormControl sx={{ margin: "5px", width: "130px" }}>
        <InputLabel id="role-select-label">Roles</InputLabel>
        <Select
          labelId="role-select-label"
          id="role-select"
          value={role}
          label="Roles"
          onChange={handleRoleChange}
          aria-label='dropdown'
        >
          <MenuItem disabled value="">
            Select Role
          </MenuItem>
          {/* Map through roles and create menu items */}
          <MenuItem value={"frontend"}>Frontend</MenuItem>
          <MenuItem value={"backend"}>Backend</MenuItem>
          <MenuItem value={"ios"}>IOS</MenuItem>
          <MenuItem value={"android"}>Android</MenuItem>
          <MenuItem value={"tech lead"}>Tech Lead</MenuItem>
        </Select>
      </FormControl>

      {/* Number of Employees Filter */}
      <FormControl sx={{ margin: "5px", width: "220px" }}>
        <InputLabel id="employee-select-label">
          Number of Employees
        </InputLabel>
        <Select
          labelId="employee-select-label"
          id="employee-select"
          value={numberOfEmployees}
          label="Number of Employees"
          aria-label='dropdown'
          onChange={handleNumberOfEmployeesChange}
        >
          <MenuItem disabled value="">
            Number Of Employees
          </MenuItem>
          <MenuItem value={10}>0 - 10</MenuItem>
          <MenuItem value={50}>10 - 50</MenuItem>
          <MenuItem value={100}>50 - 100</MenuItem>
          <MenuItem value={101}>100+</MenuItem>
        </Select>
      </FormControl>

      {/* Experience Filter */}
      <FormControl sx={{ margin: "5px", width: "150px" }}>
        <InputLabel id="experience-select-label">Experience</InputLabel>
        <Select
          labelId="experience-select-label"
          id="experience-select"
          value={experience}
          label="Experience"
          aria-label='dropdown'
          onChange={handleExperienceChange}
        >
          <MenuItem disabled value="">
            Select Experience
          </MenuItem>
          <MenuItem value={0}>Fresher</MenuItem>
          <MenuItem value={1}>0 to 1 Year</MenuItem>
          <MenuItem value={2}>1 to 2 Year</MenuItem>
          <MenuItem value={3}>2 + Years</MenuItem>
        </Select>
      </FormControl>

      {/* Location Filter */}
      <FormControl sx={{ margin: "5px", width: "120px" }}>
        <InputLabel id="experience-select-label">Location</InputLabel>
        <Select
          labelId="location-select-label"
          id="location-select"
          value={location}
          label="Location"
          aria-label='dropdown'
          onChange={handleLocationChange}
        >
          <MenuItem disabled value="">
            Select Location
          </MenuItem>
          <MenuItem value={"remote"}>Remote</MenuItem>
          <MenuItem value={"delhi ncr"}>Delhi NCR</MenuItem>
          <MenuItem value={"mumbai"}>Mumbai</MenuItem>
          <MenuItem value={"chennai"}>Chennai</MenuItem>
          <MenuItem value={"bangalore"}>Bangalore</MenuItem>
        </Select>
      </FormControl>

      {/* Salary Filter */}
      <FormControl sx={{ margin: "5px", width: "250px" }}>
        <InputLabel id="salary-select-label">Minimum Base Pay Salary</InputLabel>
        <Select
          labelId="salary-select-label"
          id="salary-select"
          value={salary}
          label="Minimum Base Pay Salary"
          aria-label='dropdown'
          onChange={handleSalaryChange}
        >
          <MenuItem disabled value="">
            Select Salary
          </MenuItem>
          <MenuItem value={10}>upto 10 LPA</MenuItem>
          <MenuItem value={20}>10 to 20 LPA</MenuItem>
          <MenuItem value={50}>20 to 50 LPA</MenuItem>
          <MenuItem value={51}>50+ LPA</MenuItem>
        </Select>
      </FormControl>

      {/* Company Filter */}
      <FormControl sx={{ margin: "6px", width: "180px" }}>
        <TextField
          id="company-search"
          label="Company"
          variant="outlined"
          value={company}
          aria-label='search-box'
          onChange={handleCompanyChange}
        />
      </FormControl>
    </div>
  );
};

export default FiltersComponent;
