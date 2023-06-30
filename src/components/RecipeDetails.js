import React from "react";
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function RecipeDetails({recipe}){
    const defaultTheme = createTheme();

    return (
        <div>
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline />
                <div className="details-container">
                    <iframe src={recipe.link} className="recipe-link"/>
                </div>
            </ThemeProvider> 
        </div>
    )
}

export default RecipeDetails;