import React, { useContext, useRef, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import { Form, InputGroup } from "react-bootstrap";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContact, clearFilter, filtered } = contactContext;
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterContact(e.target.value);
    } else {
      clearFilter();
    }
  };
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="inputGroup-sizing-default">
          <i className="fas fa-search"></i>
        </InputGroup.Text>
      </InputGroup.Prepend>
      <Form.Control
        ref={text}
        className="w-75"
        type="text"
        placeholder="Filter Contacts..."
        aria-label="Search"
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default ContactFilter;
