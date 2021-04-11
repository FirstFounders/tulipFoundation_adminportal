import React from 'react';
import { Form } from 'react-bootstrap';

export default function Input({
  placeholder,
  text,
  name,
  type,
  Col,
  as,
  row,
  value,
  onChange,
}) {
  return (
    <div>
      <Form.Group as={Col} controlId='formGridEmail'>
        <Form.Label>{text}</Form.Label>
        <Form.Control
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </Form.Group>
    </div>
  );
}
