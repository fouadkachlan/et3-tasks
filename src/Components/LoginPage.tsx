import React from "react";
import CustomDiv from '../CustomComponents/CustomDiv';
import CustomInput from '../CustomComponents/CustomInput';
import CustomButton from '../CustomComponents/CustomButton';
import CustomForm from "../CustomComponents/CustomForm";
import { userStore } from '../Stores/UserStore';
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const usernameInput = document.getElementById("username") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!username || !password) {
      alert("Username and Password are Required \n Please re-enter your username and password!");
      return;
    }

    const IsUserAuthenticated: boolean = userStore.authenticateUser(username, password);
    if (IsUserAuthenticated) {
      navigate('/dashboard');
      alert("Authentication successful");
    } else {
      alert("Authentication failed!");
    }
  };

  return (
    <CustomDiv display="flex" justifyContent="center" alignItems="flex-start" width="17%" height="35rem"
      style={{
        marginLeft: "35%",
        marginTop: "5%",
        border: "1px solid black ",
        borderRadius: "20px",
        flexDirection: "column",
        padding: "2rem",
        backgroundColor: "#EFEFEF"
      }}>
      <CustomDiv display="flex" justifyContent="center" alignItems="center" width="100%" height=""
        style={{
          fontSize: "35pt",
          fontWeight: "bold",
          color: "black",
          marginBottom: "2rem",
        }}>
        Login Page
      </CustomDiv>
      <CustomForm onSubmit={handleSubmit}
       style={{ 
            width: "100%",
            display: "flex", 
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem" }}>
        <CustomInput id="username" type="text" style={{
          width: "20rem", height: "2.5rem"
        }}  placeholder="Username"
            borderRadius="10px"
            hoverStyle={{ 
                borderColor: "transparent",
                boxShadow: "0 0 0 5px #3572EF" }} />
        <CustomInput id="password" style={{
          width: "20rem", height: "2.5rem"
        }}
            placeholder="Password"
            borderRadius="10px"
            type="password" 
            hoverStyle={{ 
                borderColor: "transparent",
                boxShadow: "0 0 0 5px #3572EF" }} />
        <CustomButton 
          style={{
            backgroundColor: "#3572EF",
            height: "2.5rem",
            width: "10rem",
            marginTop: "1.5rem",
            borderRadius: "35px"
          }} color="black"
             hoverStyle={{ 
                backgroundColor: "#01204E",
                color: "white" }}>
          Submit
        </CustomButton>
      </CustomForm>
    </CustomDiv>
  );
};

export default LoginPage;
