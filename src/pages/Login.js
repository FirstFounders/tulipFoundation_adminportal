import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

//redux
import { connect } from 'react-redux';
import { loginAction, isUserLoggedIn } from '../Redux/actions';

//
import Layout from '../components/Layout';
import Input from '../components/UI/input';
import { Redirect } from 'react-router';

function Login({ loginAction, token }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [reportMessage, setReportMessage] = useState('');
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
    console.log('me');
    const user = {
      email,
      password,
    };
    if (!user || !email) {
      setErrorMessage('All Field are Mandatory');
      setInterval(() => {
        setErrorMessage('');
        setReportMessage('');
      }, 4000);
    } else {
      loginAction(user).then((data) => {
        console.log(data);
        if (data && data.type === 'error') {
          setErrorMessage(data.message);
          setInterval(() => {
            setErrorMessage('');
            setReportMessage('');
          }, 4000);
        }
      });
    }
  };

  console.log(token);

  if (token.authenticate) {
    return <Redirect to='/' />;
  }
  return (
    <Layout>
      <Container>
        <Row className='mt-4'>
          <Col md={{ span: 6, offset: 3 }}>
            {/* <Form onSubmit={handleSubmit}> */}
            <div>
              <h1>Admin DashBoard</h1>
            </div>
            <Form>
              <Input
                text='Email'
                label='Email address'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Enter email'
              />
              <Input
                text='Password'
                label='Password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                placeholder='Enter Password'
              />

              <Button variant='primary' type='submit' onClick={handleSubmit}>
                Submit
              </Button>
            </Form>
            {handleAlert()}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  loginAction: (data) => dispatch(loginAction(data)),
  isUserLoggedIn: () => dispatch(isUserLoggedIn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
