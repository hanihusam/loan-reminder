import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, Redirect } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  Container,
  Row,
  Col,
  Card,
  InputGroup,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email").required("Email is required!"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Password confirm is required"),
});

const Register = ({ isAuth, register }) => {
  //   const [registered, setRegistered] = useState(false);

  //   useEffect(() => {
  //     return () => {
  //       setRegistered(false);
  //     };
  //   }, []);

  const onRegister = (name, email, password, confirm_password) => {
    // register(name, email, phone, password, confirm_password);
    // setRegistered(true);
  };

  //   if (isAuth) {
  //     return <Redirect to="/" />;
  //   } else if (registered) {
  //     return <Redirect to="/login" />;
  //   } else
  return (
    <div className="d-flex min-vh-100 flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="9" lg="7" xl="6">
            <Card className="mx-4 shadow-sm">
              <Card.Body className="p-4">
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                  }}
                  validationSchema={RegisterSchema}
                  onSubmit={(
                    { name, email, password, confirm_password },
                    { setSubmitting }
                  ) => {
                    onRegister(name, email, password, confirm_password);
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
                      <h1>Register</h1>
                      <p className="text-muted">Create your account</p>
                      <Form.Group>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fa fa-user"></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            isInvalid={errors.name && touched.name}
                          />
                        </InputGroup>
                        <FormControl.Feedback
                          className={
                            errors.name && touched.name ? "d-block" : ""
                          }
                          type="invalid"
                        >
                          {errors.name}
                        </FormControl.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fas fa-envelope"></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="Email"
                            isInvalid={errors.email && touched.email}
                          />
                        </InputGroup>
                        <FormControl.Feedback
                          className={
                            errors.email && touched.email ? "d-block" : ""
                          }
                          type="invalid"
                        >
                          {errors.email}
                        </FormControl.Feedback>
                      </Form.Group>
                      <Form.Group>
                        <InputGroup className="mb-3">
                          <InputGroup.Prepend>
                            <InputGroup.Text>
                              <i className="fa fa-lock"></i>
                            </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            placeholder="Password"
                            isInvalid={errors.password && touched.password}
                          />
                        </InputGroup>
                        <FormControl.Feedback
                          className={
                            errors.password && touched.password ? "d-block" : ""
                          }
                          type="invalid"
                        >
                          {errors.password}
                        </FormControl.Feedback>
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
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            placeholder="Repeat password"
                            isInvalid={
                              errors.confirm_password &&
                              touched.confirm_password
                            }
                          />
                        </InputGroup>
                        <FormControl.Feedback
                          className={
                            errors.confirm_password && touched.confirm_password
                              ? "d-block"
                              : ""
                          }
                          type="invalid"
                        >
                          {errors.confirm_password}
                        </FormControl.Feedback>
                      </Form.Group>
                      <Button type="submit" variant="primary" block>
                        Register
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
              <Card.Footer className="p-4">
                <Row className="text-center justify-content-center">
                  <Col>
                    <p className="mb-2">Do you have account?</p>
                    <Link to="/peserta/login">
                      <Button className="mb-1" variant="success" block>
                        Login
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
