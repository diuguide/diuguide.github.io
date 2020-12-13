import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavHeader from "./components/NavBar";
import Landing from './components/Landing';
import "./App.css";

function App() {
  return (
    <Container>
      <NavHeader />
      <Landing />
    </Container>
  );
}

export default App;
