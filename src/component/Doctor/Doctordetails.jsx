import {
  Box,
  Stack,
  Typography,
  FormLabel,
  RadioGroup,
  Button,
  Divider,
  FormControl,
  Autocomplete,
  TextField,
  FormControlLabel,
  Radio,
  Modal,
} from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";

import React, { useContext, useEffect, useState } from "react";
import AddCircleOutlineSharpIcon from "@mui/icons-material/AddCircleOutlineSharp";
// import { doctorsData } from "../Doctor/Doc";
import { Link, useNavigate, useParams } from "react-router-dom";
import DataContext from "../Datacontext";
import { DutyTimingsData } from "../.././component/Doctor/Doc";
import { ExperienceData } from "../../component/Doctor/Doc";
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

const Doctordetails = () => {
  const navTo = useNavigate();
  const {doctorData,setdoctorData} = useContext(DataContext);
  const { id } = useParams();
  const itemId = parseInt(id);

  const [item, setItem] = useState();
  const[edit,setEdit]=useState(item);
  


  useEffect(() => {
    console.log("id", id);
    setItem(
      doctorData.find((item) => {
        return itemId === Number(item.Id);
      })
    );
    setEdit(item);
  }, [id]); 


    const deletefun=(am)=>{
    const del=  doctorData.filter((ele)=> ele.Id !== Number(am)
      
      )
      setdoctorData([...del])
      navTo("/doctor")

    }
  

  
 
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("item",item)
  console.log("doctorsData", doctorData);
  const submitDoctorForm = (e) => {
    e.preventDefault();
     const i=doctorData.indexOf(doctorData.find((item) => {
      return itemId === Number(item.Id);
    }))
    console.log(i)
    doctorData[i]=item;
   
    setOpen(false);
  };
  return (
    <>
       <Box style={{ display: "flex", alignItems: "center" }}>
        <Link to="/doctor">
          {" "}
          <ArrowBackIosOutlinedIcon style={{ fontSize: "25px" }} />
        </Link>
        <Box>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "700", marginLeft: "7px" }}
          >
            {" "}
            Doctor Details{" "}
          </Typography>
          <Box>
            <Box
              style={{
                marginLeft: "7px",
                height: 5,
                width: 50,
                backgroundColor: "#7575ff",
                borderRadius: "20px",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>

      <Box
        style={{ display: "flex", justifyContent: "end", marginBottom: "20px" }}
      >
        <Button
          variant="contained"
          style={{
            padding: "0px 10px 0px 10px",
            height: "30px",
            marginRight: "30px",
            backgroundColor: "red",
          }} 
          onClick={()=>deletefun(itemId)}
        >
          delete
        </Button>

        <Button
          variant="contained"
          style={{
            padding: "0px 10px 0px 10px",
            height: "30px",
            marginRight: "160px",
            backgroundColor: "#7575ff",
          }}
          onClick={handleOpen}
        >
          edit
        </Button>
      </Box>

      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        {item && (
          <>
            <Box style={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <img
                  src={item.imageUrl}
                  alt="vd"
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box style={{ marginLeft: "10px" }}>
                <Typography
                  align="start"
                  style={{ fontSize: "16px", fontWeight: "700" }}
                >
                  {item.Name}
                </Typography>
                <Typography align="start" style={{ fontSize: "14px" }}>
                  {item.Education}
                </Typography>
                <Typography align="start" style={{ fontSize: "14px" }}>
                  {item.Designation}
                </Typography>
                <Typography
                  align="start"
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  specialization
                </Typography>
                <Typography align="start" style={{ fontSize: "14px" }}>
                  {item.Specialization}
                </Typography>

                <Typography
                  align="start"
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  Experience
                </Typography>
                <Typography align="start" style={{ fontSize: "14px" }}>
                  {item.Experience}
                </Typography>
                <Typography
                  align="start"
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  avaibality
                </Typography>
                <Stack direction="row" gap={1}>
                  {item.AvailableDays &&
                    item.AvailableDays.map((val) => (
                      <Typography align="start" style={{ fontSize: "14px" }}>
                        {week[val]}
                      </Typography>
                    ))}
                  <Typography align="start" style={{ fontSize: "14px" }}>
                    {item.StartHour} &nbsp; {item.EndHour}
                  </Typography>
                </Stack>

                <Typography
                  align="start"
                  style={{
                    fontSize: "14px",
                    color: "gray",
                    marginTop: "20px",
                  }}
                >
                  mobile
                </Typography>
                <Typography align="start" style={{ fontSize: "14px" }}>
                  {item.Mobile}
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              >
                <Typography
                  style={{
                    marginRight: "0px",
                    fontSize: "14px",
                    color: "gray",
                  }}
                >
                  Break Hours
                </Typography>
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <AddCircleOutlineSharpIcon
                    style={{
                      fontSize: "16px",
                      alignItems: "center",
                      color: "blue",
                    }}
                  />
                  <Typography
                    align="center"
                    style={{
                      fontSize: "14px",
                      alignItems: "center",
                      color: "blue",
                    }}
                  >
                    {" "}
                    Add{" "}
                  </Typography>
                </Box>
              </Box>
              <Stack direction="row" gap={6}>
                <Stack gap={2}>
                  {item.WorkDays &&
                    item.WorkDays.map((itm) => (
                      <Typography align="start" style={{ fontSize: "14px" }}>
                        {itm.Day}
                      </Typography>
                    ))}
                </Stack>
                <Stack gap={2}>
                  {item.WorkDays &&
                    item.WorkDays.map((itm) => (
                      <Box>
                        {itm.State === "TimeOff" ? (
                          <Typography
                            color="red"
                            textAlign="start"
                            style={{ fontSize: "14px" }}
                          >
                            Time Off
                          </Typography>
                        ) : (
                          <Typography style={{ fontSize: "14px" }}>
                            {`${itm.WorkStartHour.toLocaleTimeString()} -
                            ${itm.WorkEndHour.toLocaleTimeString()}`}
                          </Typography>
                        )}
                      </Box>
                    ))}
                </Stack>
              </Stack>
              <Typography
                align="center"
                style={{ marginBottom: "10px", fontSize: "14px" }}
              ></Typography>
            </Box>
          </>
        )}
      </Box>

      {item && <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {item &&
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
                value={item.Name}
                onChange={(e) => {
                  setItem({
                    ...item,
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
                  value={item.Gender}
                  onChange={(e) => setItem({ ...item, Gender: e.target.value })}
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
                value={item.Specialization}
                onChange={(e, val) => setItem({ ...item, Specialization: val })}
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
                  value={item.Mobile}
                  onChange={(e) => setItem({ ...item, Mobile: e.target.value })}
                  size="small"
                  type="number"
                  required
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                <label style={{ fontWeight: "500" }}>Education</label>
                <TextField
                  value={item.Education}
                  onChange={(e) =>
                    setItem({ ...item, Education: e.target.value })
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
                  value={item.Email}
                  onChange={(e) => setItem({ ...item, Email: e.target.value })}
                  size="small"
                  type="email"
                  required
                />
              </Box>
              <Box sx={{ width: "50%" }}>
                <label style={{ fontWeight: "500" }}>Designation</label>
                <TextField
                  value={item.Designation}
                  onChange={(e) =>
                    setItem({
                      ...item,
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
                  value={item.Experience}
                  onChange={(e, val) => setItem({ ...item, Experience: val })}
                  size="small"
                  id="combo-box-demo"
                  options={ExperienceData.map((exp) => exp.Text)}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Box>

              <Box sx={{ width: "50%" }}>
                <label style={{ fontWeight: "500" }}>Upload Image</label>
                <TextField
                  // value={item.imageUrl}
                  onChange={(e) =>
                    setItem({
                      ...item,
                      imageUrl: e.target.files[0],
                    })
                  }
                  size="small"
                  type="file"
                  accept="image/*"
                  required
                />
              </Box>
            </Box>
            <Box>
              <label style={{ fontWeight: "500" }}>Duty Time</label>
              <Autocomplete
                value={item.DutyTiming}
                onChange={(e, val) => setItem({ ...item, DutyTiming: val })}
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
        </Box>}
      </Modal> }
    </>
  );
};

export default Doctordetails;
