import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { Box, Grid, Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import Table from "./Table";
import Chartp from "./Chartp";
import moment from "moment";

import { useContext, useEffect, useState } from "react";
import DataContext from "./Datacontext";

// import img7 from "../Images/default.png";

const Hcared = () => {
  const [todayApoi, settodayapoi] = useState([]);
  const [weekapoi, setweekapoi] = useState([]);
  const { doctorData, setdoctorData } = useContext(DataContext);
  const { events } = useContext(DataContext);
  const gettodaydate = () => {
    const today = moment().startOf("day");
    return events.filter((event) => moment(event.start).isSame(today, "day"));
  };
  const getweekdate = () => {
    const startofweek = moment().startOf("week");
    const endofweek = moment().endOf("week");
    return events.filter((event) =>
      moment(event.start).isBetween(startofweek, endofweek, "day", "[]")
    );
  };

  useEffect(() => {
    settodayapoi(gettodaydate);
    setweekapoi(getweekdate);
  }, [events]);

  return (
    <>
      <Grid container spacing={3} justifyContent="space-evenly">
        <Grid item md={8}>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "700" }}
                  >
                    Total Appointments - Today
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <CalendarTodayOutlinedIcon
                      style={{
                        fontSize: "40px",
                        marginLeft: "-40px",
                        marginTop: "40px",
                        transform: "rotate(-30deg)",
                      }}
                    />
                    <Typography variant="h3" color="#304ffe">
                      {todayApoi.length}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345, marginLeft: "50px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{ fontWeight: "700" }}
                  >
                    Total Appointments - This Week
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <CalendarTodayOutlinedIcon
                      style={{
                        fontSize: "40px",
                        marginLeft: "-40px",
                        marginTop: "40px",
                        transform: "rotate(-30deg)",
                        opacity: 9,
                      }}
                    />
                    <Typography variant="h3" color="#304ffe">
                      {weekapoi.length}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>

          <Table />
          <Chartp />
        </Grid>

        <Grid item md={3}>
          <Box>
            <Card sx={{ minWidth: 275, marginBottom: "50px" }}>
              <CardContent sx={{ textAlign: "start" }}>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    paddingLeft: "8px",
                    borderLeft: "3px solid red",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Added New Doctor -{" "}
                  <span style={{ fontWeight: 300, fontSize: 13 }}>
                    Dr.Johnson James,Cardiologist,
                    <br />2 years ago
                  </span>
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{
                    fontWeight: 300,
                    fontSize: 13,
                    paddingLeft: "8px",
                    borderLeft: "3px solid red",
                  }}
                ></Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    paddingLeft: "8px",
                    borderLeft: "3px solid #e16651;",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Added New Appointment -{" "}
                  <span
                    style={{
                      fontWeight: 300,
                      fontSize: 13,
                      paddingLeft: "8px",
                      borderLeft: "3px solid red;",
                    }}
                  >
                    Laura for general Checkup on 7th September,2020@ 8.30AM with
                    Dr.monali coe
                  </span>
                  <br />
                  <span style={{ fontWeight: 300, fontSize: 13 }}>
                    2 years ago
                  </span>
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{ fontWeight: 300, fontSize: 13 }}
                ></Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    paddingLeft: "8px",
                    borderLeft: "3px solid #e16651;",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Added New Petients -{" "}
                  <span style={{ fontWeight: 300, fontSize: 13 }}>
                    James Richard for fever and cold
                  </span>{" "}
                  <br />
                  <span sx={{ fontWeight: 300, fontSize: 13 }}>
                    {" "}
                    2 years ago
                  </span>
                </Typography>

                <Typography
                  sx={{ mb: 1.5, textAlign: "start" }}
                  color="text.secondary"
                  style={{ fontWeight: 300, fontSize: 13 }}
                ></Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: 700,
                    paddingLeft: "8px",
                    borderLeft: "3px solid #e16651;",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Added New Appointment
                  <span style={{ fontWeight: 300, fontSize: 13 }}>
                    Laura for general Checkup on 7th September,2020@ 8.30AM with
                    Dr.monali coe
                  </span>
                  <br />
                  <span> 2 years ago</span>
                </Typography>

                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  style={{ fontWeight: 300, fontSize: 13 }}
                ></Typography>
              </CardContent>
            </Card>
            <Card sx={{ minWidth: 275 }}>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Typography>Doctors Available</Typography>
                <Typography>View more</Typography>
              </Box>
              <Box style={{ overflowY: "scroll", maxHeight: "400px" }}>
                {doctorData.map((ele) => (
                  <CardContent style={{ display: "flex", gap: "10px" }}>
                    <img
                      src={ele.imageUrl}
                      style={{
                        height: "40px",
                        width: "40px",
                        borderRadius: "50%",
                      }}
                      alt="img"
                    />
                    <Box>
                      <Box>
                        <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                          Dr {ele.Name}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          style={{ fontWeight: 300, fontSize: 13 }}
                        >
                          {ele.Specialization}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                ))}
              </Box>
              {/* <CardContent style={{ display: "flex", gap: "10px" }}>
                <img alt="on"
                  src={img3}
                  style={{ height: "40px", width: "40px", borderRadius: "50%" }}
                />
                <Box>
                  <Box>
                    <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                      Dr.Nembo Lukin
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ fontWeight: 300, fontSize: 13 }}
                    >
                      GENERAL MEDICINE
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent style={{ display: "flex", gap: "10px" }}>
                <img src={img6} style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="img" />
                <Box>
                  <Box>
                    <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                      Dr.Nembo Lukin
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ fontWeight: 300, fontSize: 13 }}
                    >
                      GENERAL MEDICINE
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent style={{ display: "flex", gap: "10px" }}>
                <img src={img5}  style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="img" />
                <Box>
                  <Box>
                    <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                      Dr.Nembo Lukin
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ fontWeight: 300, fontSize: 13 }}
                    >
                      GENERAL MEDICINE
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent style={{ display: "flex", gap: "10px" }}>
                <img src={Img2} style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="img" />
                <Box>
                  <Box>
                    <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                      Dr.Nembo Lukin
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ fontWeight: 300, fontSize: 13 }}
                    >
                      GENERAL MEDICINE
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
              <CardContent style={{ display: "flex", gap: "10px" }}>
                <img src={Img1}  style={{ height: "40px", width: "40px", borderRadius: "50%" }} alt="img" />
                <Box>
                  <Box>
                    <Typography style={{ fontWeight: 300, fontSize: 13 }}>
                      Dr.Nembo Lukin
                    </Typography>
                    <Typography
                      color="text.secondary"
                      style={{ fontWeight: 300, fontSize: 13 }}
                    >
                      GENERAL MEDICINE
                    </Typography>
                  </Box>
                </Box>
              </CardContent> */}
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Hcared;
