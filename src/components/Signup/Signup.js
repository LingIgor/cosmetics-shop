import React from "react";
import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline, 
  Paper,

} from "@mui/material";
import {MdOutlineEditNote} from"react-icons/md"


const Register = () => {
  const initialValues = {
    email: "",
    password: "",
    name:""
  };

  const handleSubmit = (values) => {
    console.log("Отправка данных:", values);  };



  return (
   
      <Container component="main" >
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MdOutlineEditNote size={40}  color="pink"/>
          <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
            Регістрація
          </Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form sx={{ width: "100%", mt: 3 }}>
            <Field
                as={TextField}
                name="name"
                label="Name"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Пароль"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
              <Field
                as={TextField}
                type="password"
                name="password"
                label="Повтор пароля"
                variant="outlined"
                margin="normal"
                required
                fullWidth
              />
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
              
                sx={{ mt: 3, mb: 2 }}
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  background: "pink",
                  color: "red",
                }}
              >
                Зареєструватись
              </Button>              
            </Form>
          </Formik>
        </Paper>
      </Container>

  );
};

export default Register;
