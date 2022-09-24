import { Button, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const EditPersons = () => {

    return ( 
        <Stack spacing={6} justifyContent="center" alignItems='center'>
                <Typography variant="h6" fontWeight={600}>EDIT PERSON</Typography>
                <TextField label='First Name' variant="outlined" size="small" style={{ width: 400 }} defaultValue=""></TextField>
                <TextField label='Last Name' variant="outlined" size="small" style={{ width: 400 }} ></TextField>
                <TextField label='Position' variant="outlined" size="small" style={{ width: 400 }} ></TextField>
                <Stack direction='row'>
                <Button variant="contained">
                    EDIT
                </Button>
                <Button variant="contained">
                    DELETE
                </Button>
                </Stack>
            </Stack>
     );
}
 
export default EditPersons;