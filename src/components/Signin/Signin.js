import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  TextField,
  Button,
  Typography,
  Container,
  CssBaseline,
  Grid,
  Paper,
  Backdrop,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';

const LoginForm = ({ closeForm }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = values => {
    console.log('Отправка данных:', values);
  };

  const closeFormBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  return (
    <Backdrop
      open={true}
      style={{ zIndex: '1', background: 'rgba(255, 255, 255, 0.4)' }}
      onClick={closeFormBackdrop}
    >
      <Container component="main" style={{ width: '500px' }}>
        <CssBaseline />
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            border: '3px solid pink',
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: 48, color: 'pink' }} />
          <Typography variant="h5" component="h2" sx={{ mt: 2 }}>
            Вхід
          </Typography>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form sx={{ width: '100%', mt: 3 }}>
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
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={closeForm}
                sx={{ mt: 3, mb: 2 }}
                style={{
                  height: '50px',
                  borderRadius: '10px',
                  background: 'pink',
                  color: 'red',
                }}
              >
                Увійти
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '16px',
                    }}
                  >
                    Забыли пароль?
                  </Link>
                </Grid>
                <Grid item>
                  <Link
                    to={'/register'}
                    onClick={closeForm}
                    variant="body2"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                      fontSize: '16px',
                    }}
                  >
                    Зарегистрироваться
                  </Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Paper>
      </Container>
    </Backdrop>
  );
};

export default LoginForm;
