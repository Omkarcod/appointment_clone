import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  TextField,
  Autocomplete,
  Radio,
  FormControlLabel,
  Stack,
  Modal,
  FormLabel,
  RadioGroup
} from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React, { useContext, useEffect, useState } from "react";
import { doctorsData } from "../.././component/Doctor/Doc";
import { useParams, useNavigate } from "react-router-dom";
import DataContext from "../Datacontext";
import { DutyTimingsData } from "../.././component/Doctor/Doc";
import {ExperienceData} from "../../component/Doctor/Doc"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Doctor = () => {
  const [age, setAge] = React.useState("");
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
   setSearch(event.target.value)  };
console.log("search",search)
  const navTo = useNavigate();
  const { id } = useParams();
  const itemId = parseInt(id);

  const [item, setItem] = useState();
  const [newDoctor,setNewDoctor] =useState(
    {
    Name:'',
    Gender:"",
    Mobile:'',
    Email:"",
    department:'',
    Education:"",
   
    Designation:"",
    dutytime:"",
    imageUrl:'',
    Experience:'',
    DutyTiming:'',
    WorkDays: [
      {
          Day: 'sunday',
          Index: 0,
          Enable: true,
          WorkStartHour: new Date(2020, 7, 1, 10, 0),
          WorkEndHour: new Date(2020, 7, 1, 19, 0),
          BreakStartHour: new Date(2020, 7, 1, 14, 0),
          BreakEndHour: new Date(2020, 7, 1, 15, 0),
          State: 'AddBreak',
      },
      {
          Day: 'monday',
          Index: 1,
          Enable: false,
          WorkStartHour: new Date(2020, 7, 2, 10, 0),
          WorkEndHour: new Date(2020, 7, 2, 19, 0),
          BreakStartHour: new Date(2020, 7, 2, 14, 0),
          BreakEndHour: new Date(2020, 7, 2, 15, 0),
          State: 'TimeOff',
      },
      {
          Day: 'tuesday',
          Index: 2,
          Enable: true,
          WorkStartHour: new Date(2020, 7, 3, 10, 0),
          WorkEndHour: new Date(2020, 7, 3, 19, 0),
          BreakStartHour: new Date(2020, 7, 3, 14, 0),
          BreakEndHour: new Date(2020, 7, 3, 15, 0),
          State: 'AddBreak',
      },
      {
          Day: 'wednesday',
          Index: 3,
          Enable: true,
          WorkStartHour: new Date(2020, 7, 4, 10, 0),
          WorkEndHour: new Date(2020, 7, 4, 19, 0),
          BreakStartHour: new Date(2020, 7, 4, 14, 0),
          BreakEndHour: new Date(2020, 7, 4, 15, 0),
          State: 'AddBreak',
      },
      {
          Day: 'thursday',
          Index: 4,
          Enable: true,
          WorkStartHour: new Date(2020, 7, 5, 10, 0),
          WorkEndHour: new Date(2020, 7, 5, 19, 0),
          BreakStartHour: new Date(2020, 7, 5, 14, 0),
          BreakEndHour: new Date(2020, 7, 5, 15, 0),
          State: 'AddBreak',
      },
      {
          Day: 'friday',
          Index: 5,
          Enable: true,
          WorkStartHour: new Date(2020, 7, 6, 10, 0),
          WorkEndHour: new Date(2020, 7, 6, 19, 0),
          BreakStartHour: new Date(2020, 7, 6, 14, 0),
          BreakEndHour: new Date(2020, 7, 6, 15, 0),
          State: 'RemoveBreak',
      },
      {
          Day: 'saturday',
          Index: 6,
          Enable: false,
          WorkStartHour: new Date(2020, 7, 7, 10, 0),
          WorkEndHour: new Date(2020, 7, 7, 19, 0),
          BreakStartHour: new Date(2020, 7, 7, 14, 0),
          BreakEndHour: new Date(2020, 7, 7, 15, 0),
          State: 'TimeOff'
      }
  ]

  }
  );
  

const {doctorData,setdoctorData} = useContext(DataContext)
// console.log(doctorData)
  useEffect(() => {
    setItem(doctorData.find((item) => itemId === item.Id));
  }, [id]);

 
  const submitDoctorForm = (e) => {
    e.preventDefault();

    setdoctorData([...doctorData, newDoctor]);
    setOpen(false);
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(doctorData)

  // const search= doctorData.Specialization.filter(item =>{
  //   return Object.keys[item].some(key=>
  //     item[key].toString().toLowerCase().includes(filter().toString().toLowerCase()))
  // })
  return (
   <>
   <Grid>
      <Box style={{ display: "flex" }}>
        <Box>
          <Typography sx={{ fontSize: "24px", fontWeight: "700" }}>
          
            Doctor List
          </Typography>
          <Box>
            <Box
              style={{
                height: 5,
                width: 50,
                backgroundColor: "#7575ff",
                borderRadius: "20px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box style={{ display: "flex", justifyContent: "end" }}>
        <Box sx={{ minWidth: 170, marginRight: "30px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              select a specialitaion
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={search}
              size="small"
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={'Specialization'}>Specialization</MenuItem>
              <MenuItem value={'neurology'}>neurology</MenuItem>
              <MenuItem value={'generalmedicine'}>generalmedicine</MenuItem>
              <MenuItem value={'dermatology'}>dermatology</MenuItem>
              <MenuItem value={'orthopedics'}>orthopedics</MenuItem>
              <MenuItem value={'diabetology'}>diabetology</MenuItem>
              <MenuItem value={'cardiology'}>cardiology</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          style={{ padding: "5px 10px 5px 10px", height: "35px" }}
         onClick={handleOpen}  >
          ADD new Doctor
        </Button>
      </Box>

      <Box
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 18,
        
        }}
      >
        { doctorData && doctorData.filter((doc)=>{
          return search.toLowerCase()===''?doc:doc.Specialization.toLowerCase().includes(search)
        }).map((ele) => (
          <Card onClick={()=>navTo(`/doctor/doctordeatils/${ele.Id}`)} sx={{ width: {sm:'48%', md: "48%", xs: "90%" },marginTop:'10px', '&:hover':{border:'3px solid #7575ff' } }}>
            <CardContent style={{ display: "flex" }}>
              <img
                src={ele.imageUrl}
                alt="shbk"
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
              />
              <Box style={{ marginLeft: "40px" }}>
                <Box>
                  <Typography
                    align="start"
                    style={{ fontSize: "16px", fontWeight: "700" }}
                  >
                    {ele.Name}
                  </Typography>
                  <Typography align="start" style={{ fontSize: "13px" }}>
                    {ele.Education}
                  </Typography>
                </Box>
                <Box style={{ display: "flex" }}>
                  <Box>
                    <Typography
                      align="start"
                      style={{ color: "#666", fontSize: "13px" }}
                    >
                      Designtion
                    </Typography>
                    <Typography
                      align="start"
                      style={{ color: "#666", fontSize: "13px" }}
                    >
                      {ele.Designation}
                    </Typography>
                  </Box>
                  <Divider
                    orientation="vertical"
                    variant="middle"
                    flexItem
                    style={{ margin: "0px 10px 0px 10px" }}
                  />
                  <Box>
                    {" "}
                    <Typography
                      align="start"
                      style={{ color: "#666", fontSize: "13px" }}
                    >
                      Experience
                    </Typography>
                    <Typography
                      align="start"
                      style={{ color: "#666", fontSize: "13px" }}
                    >
                      {ele.Experience}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Grid>
    <div>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style, width: 350, height: 550, padding: "5px 20px " }}>
        <Box>
          <Typography sx={{ fontWeight: "700" }}>Add New Doctor</Typography>
          <Divider sx={{ margin: "10px 0px" }} />
        </Box>
        <Stack>
          <Box>
            <label style={{ fontWeight: "500" }}>Doctor Name</label>
            <TextField
              size="small"
              sx={{ width: "100%" }}
              placeholder="Doctor Name"
              variant="outlined"
              type="text"
              value={newDoctor.Name}
              onChange={(e) => {
                setNewDoctor({
                  ...newDoctor,
                  Name: e.target.value,
                  Id: Number(doctorData.length + 1),
                });
              }}
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <FormControl>
              <FormLabel
                style={{ fontWeight: "500", color: "black" }}
                id="demo-radio-buttons-group-label"
              >
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                value={newDoctor.Gender}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, Gender: e.target.value })
                }
              >
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": { fontSize: "small" },
                  }}
                  value="female"
                  control={<Radio size="small" />}
                  label="Female"
                  name="radio-buttons-group"
                />
                <FormControlLabel
                  sx={{
                    ".MuiFormControlLabel-label": { fontSize: "small" },
                  }}
                  value="male"
                  control={<Radio size="small" />}
                  label="Male"
                  name="radio-buttons-group"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Box>
            <label style={{ fontWeight: "500" }}>Department</label>
            <Autocomplete
              value={newDoctor.Specialization}
              onChange={(e, val) =>
                setNewDoctor({ ...newDoctor, Specialization: val })
              }
              size="small"
              id="combo-box-demo"
              options={doctorData.map((doctor) => doctor.Specialization)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Mobile Number</label>
              <TextField
                value={newDoctor.Mobile}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, Mobile: e.target.value })
                }
                size="small"
                type="number"
                required
              />
              
            </Box>
            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Education</label>
              <TextField
                value={newDoctor.Education}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, Education: e.target.value })
                }
                size="small"
                type="text"
                required
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Email</label>
              <TextField
                value={newDoctor.Email}
                onChange={(e) =>
                  setNewDoctor({ ...newDoctor, Email: e.target.value })
                }
                size="small"
                type="email"
                required
              />
            </Box>
            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Designation</label>
              <TextField
                value={newDoctor.Designation}
                onChange={(e) =>
                  setNewDoctor({
                    ...newDoctor,
                    Designation: e.target.value,
                  })
                }
                size="small"
                type="text"
                required
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", width: "100%", gap: "10px" }}>
            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Experience</label>
              <Autocomplete
                value={newDoctor.Experience}
                onChange={(e, val) =>
                  setNewDoctor({ ...newDoctor, Experience: val })
                }
                size="small"
                id="combo-box-demo"
                options={ExperienceData.map((exp) => exp.Text)}
                renderInput={(params) => <TextField {...params} />}
              />
            </Box>

            <Box sx={{ width: "50%" }}>
              <label style={{ fontWeight: "500" }}>Upload Image</label>
              <TextField
                // value={newDoctor.imageUrl}
                onChange={(e) =>
                  setNewDoctor({
                    ...newDoctor,
                    imageUrl: URL.createObjectURL( e.target.files[0])
                  })
                }
                size="small"
                type="file"
                accept='image/*'
                required
              />
            </Box>
          </Box>
          <Box>
            <label style={{ fontWeight: "500" }}>Duty Time</label>
            <Autocomplete
              value={newDoctor.DutyTiming}
              onChange={(e, val) =>
                setNewDoctor({ ...newDoctor, DutyTiming: val })
              }
              size="small"
              id="combo-box-demo"
              options={DutyTimingsData.map((duty) => duty.Text)}
              renderInput={(params) => <TextField {...params} />}
            />
          </Box>
        </Stack>

        <Box
          sx={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
        >
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e) => submitDoctorForm(e)}>Add</Button>
        </Box>
      </Box>
    </Modal>
  </div>
 </>
  );
};

export default Doctor;
