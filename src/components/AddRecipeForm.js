import React, {useEffect, useState} from "react"
import Typography from '@mui/material/Typography'
import { Button, TextField,Box, Alert} from "@mui/material"



function AddRecipeForm({onClick}){
    const [addRecipe,setAddRecipe]=useState({})
    const [showAlert,setShowAlert]=useState(false)

    useEffect(() => {setTimeout(() => setShowAlert(false), 3000)} ,[showAlert])

    function onChange(e){
        setAddRecipe({...addRecipe, [e.target.name] : e.target.value})
    }  

    function onSubmit(recipe,e){
        e.preventDefault()
        onClick(recipe)
        setShowAlert(true)
    }

    return (
        <Box component="form" sx={{display:"flex",alignItems:"center", flexDirection: 'column'}}>
            <Typography variant="h4"> New Recipe </Typography>
            <br/>
            <TextField sx={{width:"25%"}} label="Name" name="name" variant="outlined" value={addRecipe.name} onChange={onChange} />
            <br/>
            <TextField sx={{width:"25%"}} label="Link" name="link" variant="outlined" value={addRecipe.link} onChange={onChange}  />
            <br/>
            <TextField sx={{width:"25%"}} label="Image" name="image" variant="outlined" value={addRecipe.image} onChange={onChange}  />
            <br/>
            <TextField sx={{width:"25%"}} multiline name="description" label="Description" variant="outlined" value={addRecipe.description} onChange={onChange} />
            <br/>

            {showAlert && <Alert>Recipe was added to Home page</Alert>  }
            <Button  variant="contained" onClick={(e) => onSubmit(addRecipe, e)}  >Submit your Recipe </Button>
            
        </Box>
    )
}

export default AddRecipeForm;


