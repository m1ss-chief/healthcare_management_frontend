import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

const RegisterPatient = () => {






  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 4, boxShadow: 3 }}>
      <CardHeader
        title="Appointment"
        subheader={<Typography sx={{color:'white'}}>Register Patient</Typography>}
        sx={{ backgroundColor: "#3f51b5", color: "#fff" }}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          sx={{ mb: 2 }}
        >
          
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            fullWidth
            required
            // size='md'
            name="pname"
            label="Patient name"
            type="text"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            required
            name="contact"
            label="Contact"
            type="text"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            required
            name="age"
            label="Age"
            type="number"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            required
            name="healthprob"
            label="Health Problem"
            type="text"
            variant="outlined"
            margin="normal"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default RegisterPatient