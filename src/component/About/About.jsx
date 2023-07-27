import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <>
      <Box>
        <Box>
          <Typography
            sx={{ fontSize: "24px", fontWeight: "700", textAlign: "start" }}
          >
            About
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
      <Box style={{ textAlign: "left", marginTop: "20px" ,fontWeight:'500',fontSize:'18px'}}>
        An appointment app is a useful tool that allows users to schedule,
        manage, and delete their appointments with ease. It can help users save
        time, avoid conflicts, and stay organized. This app uses front-end
        technologies such as React, MUI components, Big React Calendar, and
        routing to create a user-friendly interface and functionality. In this
        also have grap which shows appoinmnets data and also which are todays
        appointments and week's appointments. React is a popular JavaScript
        library for building user interfaces that are fast, scalable, and
        modular. MUI components are a set of React components. Big React
        Calendar is a component that displays events on a large, responsive
        calendar. Routing is a technique that allows users to navigate between
        different pages or views of your app without reloading the browser. Your
        app also uses a data file to store and retrieve the information about
        the appointments. This can be a simple JSON file. A data file can help
        you persist the data across sessions and provide security and backup
        features.
      </Box>
    </>
  );
};

export default About;
