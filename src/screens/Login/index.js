import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const url = 'https://s3-ap-southeast-1.amazonaws.com/genetica.asia/wp-content/uploads/2019/08/logo-genetica-2019-10-Custom.png'
const LoginForm = (props) => {
  const [value, setValue] = React.useState('');

  const onSetUser = () => {
    localStorage.setItem('user', 'admin')
    props.history.push('/')
  };
  return (
    <div>
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src={url} style={{ height: 50, width: 'auto', marginBottom: 8 }} /> Log-in to your account
      </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
              <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
              />

              <Button color='teal' fluid size='large' onClick={() => onSetUser()}>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us? <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
};


export default LoginForm