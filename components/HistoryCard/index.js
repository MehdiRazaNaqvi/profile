import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import TerminalIcon from '@mui/icons-material/Terminal';
export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">

      <TimelineItem>

        <TimelineSeparator>
          <TimelineDot  color='primary'>
            <CodeIcon />
          </TimelineDot>


          <TimelineDot  color='primary' sx={{ justifySelf: "center", alignSelf: "center", mb: "0px" }}></TimelineDot>
          <TimelineConnector sx={{ height: "12rem" }} />

        </TimelineSeparator>



        <TimelineContent sx={{ py: '3px', px: 2 }}>
          <Typography variant="h6" component="span">
            Techsyhub
          </Typography>
          <Typography>Junior MERN Stack Developer</Typography>
          <Typography>Sep 2022 - Nov 2022</Typography>
        </TimelineContent>


      </TimelineItem>


      <TimelineItem>


        <TimelineSeparator>

          <TimelineConnector />
          <TimelineDot color='secondary' sx={{ justifySelf: "center", alignSelf: "center", mt: "0px" }}></TimelineDot>

          <TimelineDot color="secondary">
            <ArchitectureIcon />
          </TimelineDot>

        </TimelineSeparator>

        <TimelineContent sx={{ py: '3px', px: 2 }}>
          <Typography variant="h6" component="span">
            Tixsee Labs
          </Typography>
          <Typography>Trainee Software Engineer</Typography>
          <Typography>Feb 2023 - Oct 2023</Typography>

        </TimelineContent>
      </TimelineItem>


      <TimelineItem>


        <TimelineSeparator>


          <TimelineDot color='secondary' sx={{ justifySelf: "center", alignSelf: "center", mt: "0px", mb:"0px" }}></TimelineDot>

          <TimelineConnector sx={{ height: "12rem" }} />
          <TimelineDot color='primary' sx={{ justifySelf: "center", alignSelf: "center", mt: "0px" }}></TimelineDot>

          <TimelineDot color="primary">
            <TerminalIcon />
          </TimelineDot>

        </TimelineSeparator>

        <TimelineContent sx={{ py: '3px', px: 2, mt:25 }}>
          <Typography variant="h6" component="span">
            Codevative
          </Typography>
          <Typography>Associate Software Engineer</Typography>
          <Typography>Oct 2023 - Jan 2025</Typography>

        </TimelineContent>
      </TimelineItem>




      <TimelineItem>


        <TimelineSeparator>


          <TimelineDot color='primary' sx={{ justifySelf: "center", alignSelf: "center", mt: "0px", mb:"0px" }}></TimelineDot>

          <TimelineConnector sx={{ height: "12rem" }} />
          <TimelineDot color='secondary' sx={{ justifySelf: "center", alignSelf: "center", mt: "0px" }}></TimelineDot>

          <TimelineDot color="secondary">
            <LaptopMacIcon />
          </TimelineDot>

        </TimelineSeparator>

        <TimelineContent sx={{ py: '3px', px: 2, mt:25 }}>
          <Typography variant="h6" component="span">
            Codevative
          </Typography>
          <Typography>Software Engineer</Typography>
          <Typography>Jan 2025 - Present</Typography>

        </TimelineContent>
      </TimelineItem>





    </Timeline >
  );
}
