import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProjectAction } from '../Redux/actions';
import { Alert, Form } from 'react-bootstrap';
import Input from '../components/UI/input';
import TextArea from '../components/UI/textarea';
import Layout from '../components/Layout';
import ImageInput from '../components/UI/imageInput';
import Button from '../components/UI/button';

export default function Projects() {
  // const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [pictures, setPictures] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  //redux
  const dispatch = new useDispatch();
  const Event = useSelector((state) => state.Event);
  console.log(Event);

  const handlePictures = (e) => {
    const newPic = Object.values(e.target.files);
    setPictures([...pictures, ...newPic]);
  };

  const handleRemovePic = (name) => {
    const Pic = pictures.filter((pic) => pic.name !== name);
    setPictures(Pic);
  };

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
    if (!title || !article || pictures.length === 0) {
      setErrorMessage('All Field are Mandatory');
      setInterval(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      const form = new FormData();
      // form.append('author', author);
      form.append('title', title);
      form.append('article', article);
      for (let pic of pictures) {
        form.append('picture[]', pic);
      }

      dispatch(ProjectAction(form)).then((data) => {
        // console.log(data);
        if (data && data.type === 'message') {
          setReportMessage(data.message);
          setInterval(() => {
            setErrorMessage('');
            setReportMessage('');
            setTitle('');
            setArticle('');
            setPictures([]);
          }, 4000);
        } else if (data.type === 'error') {
          setErrorMessage(data.message);
          setInterval(() => {
            setErrorMessage('');
            setReportMessage('');
          }, 4000);
        }
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
                text='Title'
                type='text'
                name='title'
                value={title}
                placeholder='Enter Project Title'
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextArea
                text='Article'
                rows={5}
                placeholder='Enter Article Here'
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
              <ImageInput onChange={handlePictures} multiple />
              {pictures.length > 0
                ? pictures.map((pic, index) => (
                    <div key={index} className='d-flex my-3'>
                      <div>{pic.name}</div>
                      <button
                        className='btn btn-warning'
                        onClick={(e) => {
                          e.preventDefault();
                          handleRemovePic(pic.name);
                        }}
                      >
                        X
                      </button>
                    </div>
                  ))
                : null}
              <Button
                text='Add Event'
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
