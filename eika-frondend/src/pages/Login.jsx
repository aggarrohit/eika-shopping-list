import { useState } from "react";
import shoppingImage from "../assets/images/shopping_image.png";
import Button from "../components/Button";
import EmailField from "../components/EmailField";
import PasswordField from "../components/PasswordField";
import { useNavigate } from "react-router-dom";
import HeaderLogo from "../components/HeaderLogo";
import HeadingTitle from "../components/HeadingTitle";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleButtonClick = () => {
    showLogin ? LoginUser() : RegisterUser();
  };

  const RegisterUser = async () => {
    const url = `${process.env.REACT_APP_API_URL}user/register`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201) {
        alert("Registration Successful!!");
        setShowLogin(true);
      } else {
        const responseText = await response.text();
        const responseData = await JSON.parse(responseText);
        if (responseData && responseData.message) {
          alert(responseData.message);
        } else console.error("Request failed with status:", response.status);
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  const LoginUser = async () => {
    const url = `${process.env.REACT_APP_API_URL}login-user`;
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Basic ${btoa(`${email}:${password}`)}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const jwtToken = response.headers.get("Authorization");
        localStorage.setItem("eika-token", jwtToken);
        localStorage.setItem("eika-email", email);
        navigate("/shopping-list");
      } else {
        alert("Login failed, please register if you have not registered");
      }
    } catch (error) {
      console.error("Request error:", error);
    }
  };

  return (
    <div className="working-area center">
      <HeaderLogo />

      <img
        src={shoppingImage}
        style={{ height: "200px", width: "267px" }}
        alt="shopping"
      />

      <HeadingTitle title={"EIKA's shopping list"} />

      <EmailField email={email} setEmail={setEmail} />
      <PasswordField password={password} setPassword={setPassword} />
      <Button
        title={showLogin ? "Login" : "Register"}
        onClick={handleButtonClick}
      />
      <a onClick={() => setShowLogin(!showLogin)} className="clickable-link">
        <u>{showLogin ? "Go to Registeration" : "Go to Login"}</u>
      </a>
    </div>
  );
}
