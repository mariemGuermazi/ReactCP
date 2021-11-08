
import './App.css';
import {Form, Button, Navbar, Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" variant="light" bg="light">
  <Container>
    <Navbar.Brand href="#">REACT CP</Navbar.Brand>
  </Container>
</Navbar>
    <div className= "form">
    <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    <footer>
        <div class="footer">
            © 2021.Mariem Guermazi.
        </div>
    </footer> 
    </div>
  );
}

export default App;
