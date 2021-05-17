import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PartnershipAction } from '../Redux/actions';
import { Alert, Form } from 'react-bootstrap';
import Input from '../components/UI/input';
import TextArea from '../components/UI/textarea';
import Layout from '../components/Layout';
import ImageInput from '../components/UI/imageInput';
import Button from '../components/UI/button';

export default function Partnership() {
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyUrl, setCompanyUrl] = useState('');
  const [pictures, setPictures] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  //redux
  const dispatch = new useDispatch();
  const Partnership = useSelector((state) => state.Partnership);
  console.log(Partnership);

  const handlePictures = (e) => {
    setPictures(e.target.files[0]);
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
    // if (!companyName || !companyUrl || !title || !article || !pictures) {
    //   setErrorMessage('All Field are Mandatory');
    //   setInterval(() => {
    //     setErrorMessage('');
    //   }, 5000);
    // } else {
    const form = new FormData();

    let myObj = { company: companyName, url: companyUrl };
    let myJSON = JSON.stringify(myObj);
    form.append('title', title);
    form.append('article', article);
    form.append('picture', pictures);
    form.append('brandLink', myJSON);
    // form.append('url', companyUrl);

    dispatch(PartnershipAction(form)).then((data) => {
      // console.log(data);
      if (data && data.type === 'message') {
        setReportMessage(data.message);
        setInterval(() => {
          setErrorMessage('');
          setReportMessage('');
        }, 4000);
        setCompanyName('');
        setCompanyUrl('');
        setTitle('');
        setArticle('');
        setPictures([]);
      } else if (data && data.type === 'error') {
        setErrorMessage(data.errorMessage);
        setInterval(() => {
          setErrorMessage('');
          setReportMessage('');
        }, 7000);
      }
    });
    // }
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
                placeholder='Enter Partnership Project Title'
                onChange={(e) => setTitle(e.target.value)}
              />
              <Input
                text='Company Name'
                type='text'
                name='company'
                value={companyName}
                placeholder="Enter Company's Name "
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <Input
                text='Company url'
                type='url'
                name='link'
                value={companyUrl}
                placeholder="Enter Company's Link "
                onChange={(e) => setCompanyUrl(e.target.value)}
              />
              <TextArea
                text='Article'
                rows={5}
                placeholder='Enter Partnership Article Here'
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
              <ImageInput onChange={handlePictures} />
              {pictures ? pictures.name : null}
              <Button
                text={Partnership.loading ? 'Please Wait' : 'Add Project'}
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
