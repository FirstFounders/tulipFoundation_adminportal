import React from 'react';
import { Form } from 'react-bootstrap';

export default function textarea({ text, rows, placeholder, value, onChange }) {
  return (
    <div>
      <Form.Group controlId='exampleForm.ControlTextarea1'>
        <Form.Label>{text}</Form.Label>
        <Form.Control
          as='textarea'
          rows={rows}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Form.Group>
    </div>
  );
}
