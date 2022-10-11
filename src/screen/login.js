import { Box, Button, FormControl, Grid, InputLabel, TextField, Typography } from "@mui/material"
import Person2Icon from '@mui/icons-material/Person2';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import React from "react";
function Login() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div style={{ width: "100%", background: "#8099c5", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
            <div style={{ height: "60%", boxShadow: "2px 4px 58px 7px rgba(199,193,193,0.31)", borderRadius: 18, background: "azure" }}>

                <Box sx={{ width: "100%", }}>
                    <Box sx={{ m: 5 }}>
                        <Typography variant="h4" >Login Page</Typography>
                    </Box>
                    <Box sx={{ m: 5, display: "flex", flexDirection:"column",alignItems:"center",justifyContent:"center",}}>
                        {/* <Box sx={{ mt: 5, ml: 5,}}> */}
                        {/* <Box sx={{ display: "flex", }}>
                                <Person2Icon sx={{ fontSize: "18px" }} />
                                <Typography variant="body2">Email/UserName</Typography>
                            </Box> */}
                        {/* <FormControl sx={{ mt: 5, width: '40ch' }} variant="outlined"> */}
                            <TextField label="Email/UserName" variant="outlined" sx={{mt: 5, width:"100%"}}/>
                        {/* </FormControl> */}
                        {/* </Box> */}
                        <FormControl sx={{ mt: 5, width: '40vh' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                sx={{ width: "100%" }}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            <Typography variant="body2" sx={{mt:2, cursor:"Pointer",}}>Forgotten Password</Typography>
                        </FormControl>
                        <Button variant="contained" sx={{width:"30px" , mt:3,}}>Login</Button>
                        <Typography variant="body2" sx={{mt:2,}}>Haven't registered   <Typography variant="body2" sx={{cursor:"Pointer",}}>Sign Up now</Typography></Typography>
                    </Box>
                </Box>
            </div>
        </div >
    )
}
export default Login