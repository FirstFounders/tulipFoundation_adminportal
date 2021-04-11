import React from 'react';
import { Form } from 'react-bootstrap';

export default function imageInput({ onChange, multiple }) {
  return (
    <div>
      <Form.File
        id='custom-file'
        label='Select Images'
        custom
        accept='image/x-png,image/jpg,image/jpeg'
        onChange={onChange}
        multiple={multiple}
      />
    </div>
  );
}
