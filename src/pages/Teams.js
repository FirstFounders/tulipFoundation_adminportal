import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TeamAction } from '../Redux/actions';
import { Alert, Form } from 'react-bootstrap';
import Input from '../components/UI/input';
import Layout from '../components/Layout';
import ImageInput from '../components/UI/imageInput';
import Button from '../components/UI/button';

export default function Teams() {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [pictures, setPictures] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  //redux
  const dispatch = new useDispatch();
  const Team = useSelector((state) => state.Team);
  console.log(Team);

  const handlePictures = (e) => {
    setPictures(e.target.files[0]);
  };

  // const handleRemovePic = (name) => {
  //   const Pic = pictures.filter((pic) => pic.name !== name);
  //   setPictures(Pic);
  // };

  //handle Alert
  const [showAlert, setShowAlert] = useState(true);
  const handleAlert = () => {
    if (showAlert && (errorMessage || reportMessage)) {
      return (
        <Alert
          variant={errorMessage ? 'danger' : 'success'}
          onClose={() => {
            setShowAlert(false);
            setReportMessage('');
            setErrorMessage('');
          }}
          dismissible
        >
          <Alert.Heading>{errorMessage || reportMessage}</Alert.Heading>
        </Alert>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    if (!name || !position || !email || pictures.length === 0) {
      setErrorMessage('All Field are Mandatory');
      setInterval(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      const form = new FormData();
      form.append('name', name);
      form.append('position', position);
      form.append('email', email);
      form.append('picture', pictures);

      dispatch(TeamAction(form)).then((data) => {
        console.log(data);
        if (data.type === 'message') {
          setReportMessage(data.message);
          setInterval(() => {
            setErrorMessage('');
            setReportMessage('');
          }, 4000);
        }
        setName('');
        setEmail('');
        setPosition('');
        setPictures([]);
      });
    }
  };
  return (
    <div>
      <Layout side>
        <div className='mb-5'>
          <div className='container '>
            <Form>
              <Input
                text='Name'
                type='text'
                name='name'
                value={name}
                placeholder="Enter Member's Name "
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                text='Position'
                type='text'
                name='position'
                value={position}
                placeholder="Enter Member's Position"
                onChange={(e) => setPosition(e.target.value)}
              />
              <Input
                text='Email'
                type='text'
                name='email'
                value={email}
                placeholder="Enter Member's Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <ImageInput onChange={handlePictures} multiple />
              {pictures ? pictures.name : null}
              <Button
                text='Add Member'
                className='btn btn-success'
                onClick={handleSubmit}
              />
            </Form>
            {handleAlert()}
          </div>
        </div>
      </Layout>
    </div>
  );
}
