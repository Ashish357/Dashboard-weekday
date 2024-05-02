import React from 'react'
import FiltersComponent from '../Components/FilterComponent'
import JobGrid from '../Components/JobGrid'
import { Container } from '@mui/material'

const Dashboard = () => {
  return (
    <Container maxWidth='lg'>
      <FiltersComponent />
      <JobGrid />
    </Container>
  )
}

export default Dashboard