import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Calendar, Views, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { doctorList, waitingListData } from "../../component/Doctor/Doc";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MenuIcon from "@mui/icons-material/Menu";
// import Appoinment from "./Appoinment";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
import styled from "styled-components";

import Modal from "@mui/material/Modal";
import { el } from "date-fns/locale";
import { useContext } from "react";
import DataContext from "../Datacontext";

const locales = {
  "en-IN": require("date-fns/locale/en-IN"),
};
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
const Wrter = styled(Typography)`
  font-size: 13px;
  font-weight: 600;
  margin-top: 5px;
  margin-bottom: 10px;
`;
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

// const top100Films = [
//   { label: 'AlexaRichardson' }]
const specializationData = [
  {
    DepartmentId: 1,
    Id: "generalmedicine",
    Text: "General Medicine",
    Color: "#F538B2",
  },
  { DepartmentId: 2, Id: "neurology", Text: "Neurology", Color: "#33C7E8" },
  { DepartmentId: 3, Id: "dermatology", Text: "Dermatology", Color: "#916DE4" },
  { DepartmentId: 4, Id: "orthopedics", Text: "Orthopedics", Color: "#388CF5" },
  { DepartmentId: 5, Id: "diabetology", Text: "Diabetology", Color: "#60F238" },
  { DepartmentId: 6, Id: "cardiology", Text: "Cardiology", Color: "#F29438" },
];

// console.log(specializationData)
export default function CalendarDemo() {
  const [open, setOpen] = React.useState(false);
  const [ediopenf, setediopen] = useState(false);
  const [currentapp, setcurrentapp] = useState();

  const { events, setEvents } = useContext(DataContext);
  const [slotInfo, setSlotInfo] = useState();
  //  const {events,setEvents} = useState()
  const [toggle, settoggle] = useState(true);
  const [cform, setcform] = useState({
    name: "",
    location: "",
    sdate: "",
    edate: "",
    repeat: "never",
    department: "",
    consulation: "",
    system: "",
  });

  const handleClose = () => {
    setOpen(false);
    setcform({
      name: "",
      title: "",
      location: "",
      sdate: "",
      edate: "",
      repeat: "never",
      department: "",
      consulation: "",
      system: "",
    });
  };

  // console.log(events, "rfdtfguj");

  const handleSelectSlot = useCallback(({ start, end }) => {
    setOpen(true);
    setSlotInfo({ start, end });
  }, []);

  const addAppointmentHandle = () => {
    if (!currentapp) {
      let id = new Date().getTime();
      setEvents((prev) => [
        ...prev,
        {
          id: id,
          title: `${cform.name} of doc ${cform.department}`,
          ...slotInfo,
          ...cform,
        },
      ]);
    } else {
      let index = events.indexOf(currentapp);
      events[index] = { ...cform };
      setcurrentapp("");
    }
    handleClose();
    // setcform("");
    setediopen(false);
  };
  console.log(currentapp);
  const handleDel = (id) => {
    setEvents(
      events.filter((ele) => {
        return ele.id !== id;
      })
    );
    setediopen(false);
    setcform({
      name: "",
      location: "",
      sdate: "",
      edate: "",
      repeat: "never",
      department: "",
      consulation: "",
      system: "",
    });
  };

  useEffect(() => {
    if (currentapp) {
      setcform(currentapp);
    } else {
      // setcform("");
    }
  }, [currentapp]);

  const handleSelectEvent = (e) => {
    setediopen(true);
    setcurrentapp(e);
  };
  console.log("calendarevents", events);
  const { defaultDate, scrollToTime } = useMemo(
    () => ({
      defaultDate: new Date(),
      scrollToTime: new Date(),
    }),
    []
  );
  console.log("currentappfor54form", currentapp);
  return (
    <>
      <Grid container>
        <Grid item width="100%">
          <Calendar
            dayLayoutAlgorithm={"no-overlap"}
            defaultDate={defaultDate}
            defaultView={Views.MONTH}
            events={events}
            localizer={localizer}
            onSelectEvent={handleSelectEvent}
            onSelectSlot={handleSelectSlot}
            selectable
            scrollToTime={scrollToTime}
            style={{ height: "650px" }}
          />
        </Grid>

        {/* <Grid item md={2} sx={{ display: "flex", flexDirection: "column" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={doctorList.map((ele) => ele.name)}
            sx={{ width: 230 }}
            renderInput={(params) => (
              <TextField {...params} label="Doctors Name" />
            )}
          />

          <Box>
            <Typography>Watching List</Typography>
          </Box>
          <Box>
            {waitingListData.map((ele) => (
              <Card
                sx={{ minWidth: 75, background: "cyan", marginBottom: "10px" }}
              >
                <Box style={{ display: "flex", alignItems: "center" }}>
                  <CardContent>
                    <Typography>{ele.Name}</Typography>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                      <Typography
                        style={{ fontSize: "10px" }}
                        color="text.secondary"
                      >
                        {ele.Month}
                      </Typography>
                      <Typography style={{ fontSize: "10px" }}>
                        {ele.Time}
                      </Typography>
                    </Box>
                    <Typography style={{ fontSize: "10px" }}>
                      {ele.chekupType}
                    </Typography>
                  </CardContent>

                  <Box>
                    <MenuIcon />
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Grid> */}
      </Grid>
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button> */}
        <Dialog open={open} onClose={handleClose} style={{ width: "auto" }}>
          <DialogTitle>{"Add Appoinment"}</DialogTitle>
          <DialogContent>
            <Box>
              <label style={{ fontSize: "12px", fontWeight: "600" }}>
                PATIENT NAME
              </label>
              <br />
              <TextField
                size="small"
                style={{ width: "100%", fontSize: "13px" }}
                variant="outlined"
                type="text"
                value={cform.title}
                onChange={(e) => {
                  setcform({
                    ...cform,
                    title: e.target.value,
                    // Id: Number(doctorData.length + 1),
                  });
                }}
              />
              {/* <AddCircleIcon/> */}
            </Box>
            <Box display="flex" justifyContent="space-evenly">
              <Stack>
                <Wrter sx={{ ml: "0px" }}>Title</Wrter>
                <TextField
                  sx={{ ml: "00px" }}
                  id="outlined-basic"
                  // value={cform.title}
                  variant="outlined"
                  size="small"
                  // onChange={(e) => {
                  //   setcform({ ...cform, title: e.target.value });
                  // }}
                />
              </Stack>
              <Stack>
                <Wrter sx={{ ml: "70px" }}>Location</Wrter>
                <TextField
                  sx={{ ml: "70px" }}
                  id="outlined-basic"
                  value={cform.location}
                  variant="outlined"
                  size="small"
                  onChange={(e) => {
                    setcform({
                      ...cform,
                      location: e.target.value,
                    });
                  }}
                />
              </Stack>
            </Box>
            <Box display="flex" justifyContent="space-evenly">
              <Stack>
                <Wrter>Form</Wrter>
                <TextField
                  id="outlined-basic"
                  type="datetime-local"
                  value={cform.sdate}
                  variant="outlined"
                  size="small"
                  onChange={(e, val) => {
                    setcform({ ...cform, sdate: e.target.value });
                  }}
                />
              </Stack>
              <Stack>
                <Wrter sx={{ ml: "20px" }}>To</Wrter>
                <TextField
                  sx={{ ml: "20px" }}
                  id="outlined-basic"
                  type="datetime-local"
                  variant="outlined"
                  size="small"
                  value={cform.edate}
                  onChange={(e) => {
                    setcform({
                      ...cform,
                      edate: e.target.value,
                    });
                  }}
                />
              </Stack>
            </Box>
            <FormControlLabel control={<Checkbox />} label="All DAY" />
            <FormControlLabel control={<Checkbox />} label="TimeZone" />

            <Wrter>Repeat</Wrter>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["never", "Daily", "weekly", "monthly", "Yearly"]}
              size="small"
              sx={{ width: 300 }}
              value={cform.repeat}
              onChange={(e, val) => {
                setcform({
                  ...cform,
                  repeat: val,
                });
              }}
              renderInput={(params) => <TextField {...params} label="" />}
            />
            <Wrter>Department</Wrter>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={specializationData.map((ele) => ele.Text)}
              size="small"
              value={cform.department}
              onChange={(e, val) => {
                setcform({
                  ...cform,
                  department: val,
                });
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />
            <Wrter>Consultation</Wrter>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={["yara Barrows", "Nembo Lunkeni"]}
              size="small"
              value={cform.consulation}
              onChange={(e, val) => {
                setcform({
                  ...cform,
                  consulation: val,
                });
              }}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="" />}
            />

            <Wrter>Symptom</Wrter>
            <TextField
              fullWidth
              value={cform.system}
              onChange={(e) => {
                setcform({
                  ...cform,
                  system: e.target.value,
                });
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              style={{
                padding: "0px 10px 0px 10px",
                height: "30px",
                color: "white",
                // marginRight: "30px",
                backgroundColor: "red",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            {toggle ? (
              <Button
                style={{
                  padding: "0px 10px 0px 10px",
                  color: "white",
                  height: "30px",
                  // marginRight: "160px",
                  backgroundColor: "#7575ff",
                }}
                onClick={addAppointmentHandle}
              >
                ADD
              </Button>
            ) : (
              <Button
                style={{
                  padding: "0px 10px 0px 10px",
                  color: "white",
                  height: "30px",
                  // marginRight: "160px",
                  backgroundColor: "#7575ff",
                }}
                onClick={addAppointmentHandle}
              >
                edit
              </Button>
            )}
          </DialogActions>
        </Dialog>

        <Modal
          open={ediopenf}
          onClose={() => setediopen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box>
              <Typography>Appointment deatils</Typography>
              <Box display="flex" mb="10px">
                <Typography sx={{ width: "40%" }}>Patients Name:</Typography>
                <Typography>{currentapp && currentapp.title}</Typography>
              </Box>
              <Box display="flex" mb="10px">
                <Typography sx={{ width: "40%" }}>DepartmentName:</Typography>
                <Typography>
                  {currentapp && currentapp.DepartmentName}
                </Typography>
              </Box>
              <Box display="flex" mb="10px">
                <Typography sx={{ width: "40%" }}>Notes:</Typography>
                <Typography>{currentapp && currentapp.system}</Typography>
              </Box>
              <Box display="flex" justifyContent="end">
                <Button style={{
                  padding: "0px 10px 0px 10px",
                  color: "white",
                  height: "30px",
                  marginRight: "16px",
                  backgroundColor: "#7575ff",
                }} onClick={() => setOpen(true)}>Edit</Button>
                <Button
                  style={{
                    padding: "0px 10px 0px 10px",
                    height: "30px",
                    color: "white",
                    // marginRight: "30px",
                    backgroundColor: "red",
                  }}
                  onClick={() => handleDel(currentapp.id)}
                >
                  Delete
                </Button>
              </Box>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  );
}

// export default CalendarDemo;
