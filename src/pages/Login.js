import Card from "react-bootstrap/Card";
import "./css/Login.css";
import Button from "react-bootstrap/Button";
import { loginUser } from "../api/user";
import { ToastError } from "../components/swal/alert";


export default function Login() {
  async function handleSubmit(event) {
    event.preventDefault()
    const jsonData = {
      username: event.target.elements.inputUsername.value,
      password: event.target.elements.inputPassword.value,
    }
    const response = await loginUser(jsonData)
    .catch(() => ToastError("Error al iniciar sesión"))
    if (response && response.data) {
      localStorage.setItem('token', response.data.token)      
      window.location.href = '/profile'
    }
  }

  return (
    <div className="LoginPage">
      <div className="BackHome">
        <a className="btn btn-secondary btn-lg active" href="/">
          Home
        </a>
      </div>

      <div className="FormLogin">
        <Card className="LoginCard">
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Card.Text>Welcome to the login page!</Card.Text>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  required
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  placeholder="Enter username"
                />

                <label>Password</label>
                <input
                  required
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter password"
                />

                <Button className="ButtonLogin" variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
