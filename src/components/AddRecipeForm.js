import React from "react";
import NavBar from "./NavBar";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles';

function AddRecipeForm({}){
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        <NavBar />
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <Box 
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography 
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            New Recipe Form
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Fill out the information below to have you recipe published in the home page!
                        </Typography>
                    </Container>
                </Box>
            </main>
        </ThemeProvider>
    )
}

export default AddRecipeForm;


