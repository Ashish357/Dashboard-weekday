import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Avatar, AvatarGroup, CardActionArea, CardMedia } from '@mui/material';
import HourglassBottomOutlinedIcon from "@mui/icons-material/HourglassBottomOutlined";
import BoltIcon from '@mui/icons-material/Bolt';

const JobCard = ({jobData}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Card>
      <CardActionArea>
      <Typography variant='p' className="post-date">
        <HourglassBottomOutlinedIcon /> Posted 10 days ago
      </Typography>
        <CardContent className='card-header'>
            <CardMedia
            component="img"
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjVxS4X0s8i-LRc7oeUVcDUsG68Sq2iyxENtDTQAqX2Q&s" alt="" 
            />
          <CardContent className='card-header-content'>
            <Typography variant="subtitle2">FitStok</Typography>
            <Typography variant="subtitle2">{jobData.jobRole}</Typography>
            <Typography variant="subtitle2">{jobData.location}</Typography>
          </CardContent>
        </CardContent>
        <CardContent className='job-salary'>
          <Typography variant='body2'>Estimated Salary: {jobData?.minJdSalary || "18"} -{" "}
        {jobData?.maxJdSalary || "20"} LPA</Typography>
        {/* <CardContent className='company-details-section'> */}
        <Typography variant='body2' className="about-company-tag">About Company:</Typography>
        <Typography variant='body2' className="about-us-tag">About us</Typography>
        <Typography variant="body2">
          {isExpanded ? jobData.jobDetailsFromCompany : `${jobData.jobDetailsFromCompany.substring(0, 100)}...`}
        </Typography>
        <Button onClick={handleExpandClick} aria-label="Toggle Description" style={{textAlign:'center', width:'100%'}}>
          {isExpanded ? 'Less' : 'More'}
        </Button>
        {/* </CardContent> */}
        </CardContent>
        <Typography variant="body2" style={{marginBlock:'6px'}}>Minimum Experience: {jobData?.minExp? jobData?.minExp: 0} years</Typography>
        <Stack spacing={1}>
            <Button variant='contained' startIcon={<BoltIcon />} color="success">
              Easy Apply
            </Button>
            <Button
              variant='contained'
              startIcon={
                <AvatarGroup>
                  <Avatar
                    alt='John doe'
                    src='avatar1.jpg'
                    sx={{ width: 24, height: 24 }}
                  />
                  <Avatar
                    alt='Remy Sharp'
                    src='avatar2.jpg'
                    sx={{ width: 24, height: 24 }}
                  />
                </AvatarGroup>
              }
            >
              Unlock referal asks
            </Button>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
export default JobCard;