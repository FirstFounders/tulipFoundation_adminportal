import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BlogAction } from '../Redux/actions';
import { Alert, Form } from 'react-bootstrap';
import Input from '../components/UI/input';
import TextArea from '../components/UI/textarea';
import Layout from '../components/Layout';
import ImageInput from '../components/UI/imageInput';
import Button from '../components/UI/button';

export default function Blogs() {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [article, setArticle] = useState('');
  const [pictures, setPictures] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [reportMessage, setReportMessage] = useState('');

  //redux
  const dispatch = new useDispatch();
  const Blog = useSelector((state) => state.Blog);
  //console.log(Blog);

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
    if (!author || !title || !article || pictures.length === 0) {
      setErrorMessage('All Field are Mandatory');
      setInterval(() => {
        setErrorMessage('');
      }, 5000);
    } else {
      const form = new FormData();
      form.append('author', author);
      form.append('title', title);
      form.append('article', article);
      form.append('picture', pictures);

      dispatch(BlogAction(form)).then((data) => {
        //console.log(data);
        if (data && data.type === 'message') {
          setReportMessage(data.message);
          setInterval(() => {
            setErrorMessage('');
            setReportMessage('');
          }, 4000);
        }
        setAuthor('');
        setTitle('');
        setArticle('');
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
                text='Author'
                type='text'
                name='author'
                value={author}
                placeholder='Enter Blog Author Here'
                onChange={(e) => setAuthor(e.target.value)}
              />
              <Input
                text='Title'
                type='text'
                name='title'
                value={title}
                placeholder='Enter Blog Title'
                onChange={(e) => setTitle(e.target.value)}
              />
              <TextArea
                text='Article'
                rows={5}
                placeholder='Enter Blog Article Here'
                value={article}
                onChange={(e) => setArticle(e.target.value)}
              />
              <ImageInput onChange={handlePictures} />
              {pictures ? pictures.name : null}
              <Button
                text={Blog.loading ? 'Please Wait' : 'Add Event'}
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
