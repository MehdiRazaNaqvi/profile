import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Typography, Chip } from '@mui/material';

export default function RatingSize({ rating }) {
  return (
    <Stack sx={{ marginLeft: 'auto', }} spacing={1}>

      {/* <Chip onClick={() => {}} label="Business Dashboard" variant="outlined" sx={{color:"white"}} /> */}
      <Rating readOnly name="size-medium" size="large" defaultValue={rating} />
    </Stack>
  );
}
