import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Alert, Container, Row, Col } from "react-bootstrap";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Container key={alert.id} style={{ paddingTop: "70px" }}>
        <Row className="justify-content-center">
          <Col md={6}>
            <Alert variant={alert.type}>
              <i className="fas fa-info-circle" />
              {alert.msg}
            </Alert>
          </Col>
        </Row>
      </Container>
    ))
  );
};

export default Alerts;
