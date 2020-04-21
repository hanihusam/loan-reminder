import React, { useContext, useEffect } from "react";
import ContactFilter from "../contact/ContactFilter";
import ContactForm from "../contact/ContactForm";
import AuthContext from "../../context/auth/authContext";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="d-flex min-vh-100 flex-row ">
      <Container style={{ paddingTop: "70px" }}>
        <Row>
          <Col md={6} className="my-4">
            <ContactForm />
          </Col>
          <Col md={6} className="my-4">
            <h2 className="text-center display-4 my-4">Contact List</h2>
            <ContactFilter />
            {/* <Contact /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
