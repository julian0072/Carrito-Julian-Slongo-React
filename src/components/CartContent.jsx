import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function BasicExample() {
  return (
    <>
      <h2 className="display-5 fw-bold text-light py-5">Carrito</h2>
      <div className="container-fluid p-5 w-50 ">
        <Form className="pb-5">
          <Form.Group
            className="mb-3 text-light fw-bold"
            controlId="formBasicEmail"
          >
            <Form.Label className="py-5 display-5">Test</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Form.Group
            className="mb-3 text-light fw-bold"
            controlId="formBasicPassword"
          >
            <Form.Label className="py-5 display-5">Test</Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default BasicExample;
