import React, { useContext, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
import { Form, Button, InputGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required!"),
  phone: Yup.string()
    .min(2, "Too short!")
    .max(12, "Too long!")
    .required("Phone is required!"),
  loan_amount: Yup.string().required("Loan amount is required!"),
  deadline: Yup.string().required("Deadline date is required!"),
});

const DatePickerField = ({ name, value, onChange }) => {
  return (
    <DatePicker
      className="form-control"
      dateFormat="d/MM/yyyy"
      selected={(value && new Date(value)) || null}
      onChange={(val) => {
        onChange(name, val);
      }}
    />
  );
};

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);
  const {
    addContact,
    updateContact,
    current,
    clearCurrent,
    error,
  } = contactContext;

  useEffect(() => {
    if (error) {
      alertContext.setAlert(error, "danger");
    }
    // eslint-disable-next-line
  }, [error]);

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = (contact) => {
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        loan_amount: "",
        deadline: "",
        paid: false,
      }}
      validationSchema={ContactSchema}
      onSubmit={(
        { name, phone, loan_amount, deadline, paid },
        { setSubmitting, resetForm }
      ) => {
        onSubmit({ name, phone, loan_amount, deadline, paid });
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <h2 className="text-center display-4 my-4">Add Contact</h2>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fas fa-user"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                isInvalid={errors.name && touched.name}
              />
            </InputGroup>
            <Form.Control.Feedback
              className={errors.name && touched.name ? "d-block" : ""}
              type="invalid"
            >
              {errors.name}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>
                  <i className="fas fa-id-card"></i>
                </InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="No. Handphone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                isInvalid={errors.phone && touched.phone}
              />
            </InputGroup>
            <Form.Control.Feedback
              className={errors.phone && touched.phone ? "d-block" : ""}
              type="invalid"
            >
              {errors.phone}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Rp</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                placeholder="Jumlah hutang"
                name="loan_amount"
                value={values.loan_amount}
                onChange={handleChange}
                isInvalid={errors.loan_amount && touched.loan_amount}
              />
            </InputGroup>
            <Form.Control.Feedback
              className={
                errors.loan_amount && touched.loan_amount ? "d-block" : ""
              }
              type="invalid"
            >
              {errors.loan_amount}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <InputGroup className="mb-3">
              <InputGroup.Prepend>
                <InputGroup.Text>Jatuh tempo</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                as={DatePickerField}
                name="deadline"
                value={values.deadline}
                onChange={setFieldValue}
                isInvalid={errors.deadline && touched.deadline}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group>
            <Form.Label>Paid Off</Form.Label>
            <Form.Row>
              <Form.Check
                type="radio"
                name="paid"
                checked={values.paid === true}
                value={values.paid}
                label="Yes"
                onChange={() => setFieldValue("paid", true)}
              />
              <span className="mx-3"></span>
              <Form.Check
                type="radio"
                name="paid"
                checked={values.paid === false}
                value={values.paid}
                label="No"
                onChange={() => setFieldValue("paid", false)}
              />
            </Form.Row>
          </Form.Group>
          <div className="text-center mt-4">
            <Button variant="primary" type="submit" className="btn-block">
              {current ? "Update Contact" : "Add Contact"}
            </Button>
          </div>
          {current && (
            <div className="text-center mt-2">
              <Button
                variant="light"
                type="submit"
                className="btn-block"
                onClick={clearAll}
              >
                Clear All
              </Button>
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
