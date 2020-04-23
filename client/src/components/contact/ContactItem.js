import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import { Card, Button, Badge, Form } from "react-bootstrap";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { setCurrent, deleteContact, clearCurrent } = contactContext;

  const { _id, name, phone, loan_amount, deadline, paid } = contact;

  const formatDate = (date) => {
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("-");
  };

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <Card color="grey lighten-2">
      <Card.Body>
        <h5 className="text-primary text-left">
          {name}{" "}
          <Badge className="float-right" variant={paid ? "success" : "danger"}>
            {paid ? "Lunas" : "Belum Lunas"}
          </Badge>
        </h5>
        <ul className="list">
          {phone && (
            <li>
              <p>
                <i className="fas fa-phone"> </i> {phone}
              </p>
            </li>
          )}
          {loan_amount && (
            <li>
              <p>
                <strong>Jumlah Hutang</strong> <br />
                <span>Rp</span> {loan_amount}
              </p>
            </li>
          )}
          {deadline && (
            <li>
              <p>
                <strong>Tanggal Jatuh Tempo</strong> <br />
                <i className="fas fa-calendar" /> {formatDate(deadline)}
              </p>
            </li>
          )}
        </ul>
        <Form.Row className="mt-3">
          <Button
            className="mr-2"
            variant="warning"
            size="sm"
            onClick={() => setCurrent(contact)}
          >
            Edit
          </Button>
          <Button variant="danger" size="sm" onClick={onDelete}>
            Delete
          </Button>
        </Form.Row>
      </Card.Body>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
