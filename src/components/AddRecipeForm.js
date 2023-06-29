import React from "react";
import NavBar from "./NavBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function AddRecipeForm({navClick, navColors}){
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <NavBar navClick={navClick} navColors={navColors}/>
                    </Typography>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
}

export default AddRecipeForm;