import React from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NavBar from "./NavBar";

function RecipeDetails({recipe}){
    const defaultTheme = createTheme();

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            <NavBar />
                        </Typography>
                    </Toolbar>
                </AppBar>
                <div className="details-container">
                    <h1>{recipe.name}</h1>
                    <iframe src={recipe.link} className="recipe-link"/>
                </div>
            </ThemeProvider> 
        </div>
    )
}

export default RecipeDetails;