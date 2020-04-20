import React, { useEffect, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";
import { Formik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Button,
  Form,
} from "react-bootstrap";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = ({ history }) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (error) {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onLogin = (email, password) => {
    login({
      email,
      password,
    });
  };

  return (
    <div className="d-flex min-vh-100 flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <Card className="p-4">
              <Card.Body>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                  }}
                  validationSchema={LoginSchema}
                  onSubmit={({ email, password }, { setSubmitting }) => {
                    onLogin(email, password);
                    setSubmitting(false);
                  }}
                >
                  {({
                    errors,
                    values,
                    touched,
                    handleChange,
                    handleSubmit,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                      <h1>Login</h1>
                      <p className="text-muted">Login to your account</p>
                      <Form.Group>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fas fa-envelope"></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={errors.email && touched.email}
                          />
                        </InputGroup>
                        <Form.Control.Feedback
                          className={
                            errors.email && touched.email ? "d-block" : ""
                          }
                          type="invalid"
                        >
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <InputGroup className="mb-4">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fa fa-lock"></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            isInvalid={errors.password && touched.password}
                          />
                        </InputGroup>
                        <Form.Control.Feedback
                          className={
                            errors.password && touched.password ? "d-block" : ""
                          }
                          type="invalid"
                        >
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Row>
                        <Col xs="6">
                          <Button
                            type="submit"
                            variant="primary"
                            className="px-4"
                          >
                            Login
                          </Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button variant="link" className="px-0">
                            Forgot password?
                          </Button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Login.propTypes = {
  history: PropTypes.object,
};

export default Login;
