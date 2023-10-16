import "./Register.scss";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { registerNewUser } from "../../services/userService";
const Register = (props) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const defaultValidInput = {
    isValidEmail: true,
    isValidPhone: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
  };
  const [objectCheckInput, setObjectCheckInput] = useState(defaultValidInput);

  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  useEffect(() => {
    // axios.get("http://localhost:8080/api/v1/test-api").then((data) => {
    //   console.log(">>>check data axios:", data);
    // });
  }, []);

  const isValidInput = () => {
    setObjectCheckInput(defaultValidInput);
    if (!email) {
      toast.error("the email is required");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidInput,
        isValidEmail: false,
      });
      return false;
    }
    let regx = /^\S+@\S+\.\S+$/;
    if (!regx.test(email)) {
      toast.error("please enter a valid email address");

      return false;
    }
    if (!phone) {
      toast.error("the phone number is required");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidInput,
        isValidPhone: false,
      });
      return false;
    }
    if (!password) {
      toast.error("the password is required");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidInput,
        isValidPassword: false,
      });
      return false;
    }
    if (password != confirmpassword) {
      toast.error("your password is not similar");
      setObjectCheckInput({
        ...defaultValidInput,
        isValidInput,
        isValidConfirmPassword: false,
      });
      return false;
    }

    return true;
  };

  const handleRegister = async () => {
    let check = isValidInput();

    if (check == true) {
      let response = await registerNewUser(email, phone, username, password);
      let serverData = response.data;
      if (+serverData.EC === 0) {
        toast.success(serverData.EM);
        history.push("/login");
      } else {
        toast.error(serverData.EM);
      }
    }
  };
  return (
    <div className="Register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">phuc ptit login</div>
            <div className="detail">learning ev day is your life</div>
          </div>
          <div className="content-right col-sm-5 col-12 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">phuc ptit login</div>
            <div className="form-group">
              <label>Email: </label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidEmail
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Phone number: </label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidPhone
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Phone number"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Username: </label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                className={
                  objectCheckInput.isValidPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re-enter password: </label>
              <input
                type="text"
                className={
                  objectCheckInput.isValidConfirmPassword
                    ? "form-control"
                    : "form-control is-invalid"
                }
                placeholder="Re-enter password"
                value={confirmpassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={() => handleRegister()}
            >
              Register
            </button>
            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already have an account. Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
