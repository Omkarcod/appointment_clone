import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { DoctorTableRow } from './DoctorTableRow';




export default function DenseTable() {
  return (
    
      <TableContainer component={Paper} sx={{ width:"100%",marginTop:'30px'}}>
      <Box style={{display: 'flex',justifyContent:'space-between',margin:'20px 20px'}}>
        <Typography>Todays Appoinment</Typography>
        <Link><Typography style={{marginRight:"20px"}}>Book Appoinment</Typography></Link>
      </Box>
      <Table sx={{ maxWidth: 690 ,minWidth:200}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:'700'}}>Time</TableCell>
            <TableCell style={{fontWeight:'700'}} align="right">Name</TableCell>
            <TableCell style={{fontWeight:'700'}} align="right">DoctorName</TableCell>
            <TableCell style={{fontWeight:'700'}} align="center">Symptoms</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {DoctorTableRow.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.time}
              </TableCell>
              <TableCell align="right">{row.patientName}</TableCell>
              <TableCell align="right"><Link>{row.doctorName}</Link></TableCell>
              <TableCell align="center">{row.symptoms}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );
}
