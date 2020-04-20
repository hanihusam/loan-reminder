import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";
import { Alert } from "react-bootstrap";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <Alert color={alert.type} key={alert.id}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </Alert>
    ))
  );
};

export default Alerts;
