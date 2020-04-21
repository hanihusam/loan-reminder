import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";
import {
  MDBCard,
  MDBBtn,
  MDBBadge,
  MDBCardBody,
  MDBFormInline
} from "mdbreact";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { setCurrent, deleteContact, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };
  return (
    <MDBCard color="grey lighten-2">
      <MDBCardBody>
        <h5 className="text-primary text-left">
          {name}{" "}
          <MDBBadge
            className="float-right"
            color={type === "professional" ? "success" : "primary"}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </MDBBadge>
        </h5>
        <ul className="list">
          {email && (
            <li>
              <i className="fas fa-envelope-open"> </i> {email}
            </li>
          )}
          {phone && (
            <li>
              <i className="fas fa-phone"> </i> {phone}
            </li>
          )}
        </ul>
        <MDBFormInline>
          <MDBBtn color="elegant" size="sm" onClick={() => setCurrent(contact)}>
            Edit
          </MDBBtn>
          <MDBBtn color="danger" size="sm" onClick={onDelete}>
            Delete
          </MDBBtn>
        </MDBFormInline>
      </MDBCardBody>
    </MDBCard>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
