import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import React from "react";


 const dayOfWeekList = [
  { Value: 0, Text: 'Sunday' },
  { Value: 1, Text: 'Monday' },
  { Value: 2, Text: 'Tuesday' },
  { Value: 3, Text: 'Wednesday' },
  { Value: 4, Text: 'Thursday' },
  { Value: 5, Text: 'Friday' },
  { Value: 6, Text: 'Saturday' }
];
 const Days = [
  { Value: 'Day', Text: 'Daily' },
  { Value: 'Week', Text: 'Weekly' },
  { Value: 'Month', Text: 'Monthly' }
];
 const startHours= [
  { Value: '08:00', Text: '8:00 AM' },
  { Value: '09:00', Text: '9:00 AM' },
  { Value: '10:00', Text: '10:00 AM' },
  { Value: '11:00', Text: '11:00 AM' },
  { Value: '12:00', Text: '12:00 AM' }
];
 const endHours = [
  { Value: '16:00', Text: '4:00 PM' },
  { Value: '17:00', Text: '5:00 PM' },
  { Value: '18:00', Text: '6:00 PM' },
  { Value: '19:00', Text: '7:00 PM' },
  { Value: '20:00', Text: '8:00 PM' },
  { Value: '21:00', Text: '9:00 PM' }
];

 const timeSlots= [
  { Value: 10, Text: '10 mins' },
  { Value: 20, Text: '20 mins' },
  { Value: 30, Text: '30 mins' },
  { Value: 60, Text: '60 mins' },
  { Value: 120, Text: '120 mins' }
];

 const colorCategory = [
  { Value: 'Departments', Text: 'Department Colors' },
  { Value: 'Doctors', Text: 'Doctors Colors' }
];

const Preference = () => {
  return (
    <>
      <Box style={{ display: "flex" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
            {" "}
            {"Preference"}
          </Typography>
          <Box>
            <Box
              style={{
                height: 5,
                width: 80,
                backgroundColor: "#7575ff",
                borderRadius: "20px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box style={{display:"flex",flexDirection: 'column',alignItems: 'start',marginLeft:'30px',marginTop:"50px"}}>
        <Typography color='gray' fontSize='14px'  >Default View</Typography>
        <Autocomplete style={{marginTop:'1px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={Days.map((day)=> day.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="Daily" />}
        />
        <Typography color='gray' fontSize='14px'>Calander Start Time</Typography>
        <Autocomplete style={{marginTop:'1px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={startHours.map((st)=>st.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="time start" />}
        />
        <Typography color='gray' fontSize='14px'>Calander end Time</Typography>
        <Autocomplete style={{marginTop:'1px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={endHours.map((ed)=>ed.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="Time end" />}
        />
        <Typography color='gray' fontSize='14px'>Slot Duration</Typography>
        <Autocomplete
        style={{marginTop:'1px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={timeSlots.map((ti)=>ti.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="slot duration" />}
        />
        <Typography color='gray' fontSize='14px'>Booking color</Typography>
        <Autocomplete style={{marginTop:'1px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={colorCategory.map((sa)=>sa.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="colorCategory" />}
        />
        <Typography style={{}} color='gray' fontSize='14px'>First Day of The Week</Typography>
        <Autocomplete style={{marginTop:'1px',marginBottom:'10px',marginBottom:'15px'}}
          disablePortal
          size="small"
          id="combo-box-demo"
          options={dayOfWeekList.map((ele)=>ele.Text)}
          sx={{ width: 300, marginTop: "20px" }}
          renderInput={(params) => <TextField {...params} label="day" />}
        />
      </Box>
    </>
  );
};

export default Preference;
