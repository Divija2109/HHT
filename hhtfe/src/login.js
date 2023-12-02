// src/Login.js
import React, { useState } from 'react';
import './login.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
//import ReactDOM from 'react-dom';

//const history = createBrowserHistory(); // Create a browser history instance

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate from 'react-router-dom'

  const handleLogin = () => {
    // Add your authentication logic here
    //console.log(`Username: ${username}, Password: ${password}`);

    if (username === 'yourUsername' && password === 'yourPassword') {
        console.log('Login successful');
        // Redirect to the Dashboard component
        navigate('/Dashboard');
      } else {
        console.log('Login failed');
      }
    
  };

  return (
    <div className ='login-container'>
        <h1>Hardline Heat Treating</h1>
      <h2>Login</h2>
      <form className='login-form'>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;



// /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// /* eslint-disable react/no-unknown-property */
// import React, { useState, useEffect, useContext } from "react";
// // import Navigation from "../../assets/images/Navigation.png";
// import { useForm } from "react-hook-form";
// import { TextField, FormHelperText, InputAdornment, IconButton } from "@material-ui/core";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Visibility, VisibilityOff } from "@material-ui/icons";
// function App() {

//   // useEffect(() => {
//   //   if (logInStatus === 200) {
//   //     setSelectedTabs([]);
//   //     setSelectedDCTabs([]);
//   //     setSelectedCMTabs([]);
//   //     sessionStorage.setItem("token", token);
//   //     location?.state
//   //       ? history.push(location?.state?.from.pathname)
//   //       : history.push("/account-details");
//   //     dispatch(resetlogInStatus());
//   //   }
//   // }, [logInStatus]);
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     dispatch(resetMsg());
//   //   }, 3000);
//   // }, [logInStatus]);
//   // const [userName, setUserName] = useState("Melissa");
//   // const [passWord, setPassword] = useState("User@123");
//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePassword = () => {
//     setPasswordShown(!passwordShown);
//   };
//   // const handleUserName = (event) => {
//   //   setUserName(event.target.value);
//   // };
//   // const handlePassword = (event) => {
//   //   setPassword(event.target.value);
//   // };
//   const initialValues = {
//     userName: "Melissa",
//     password: "User@123",
//   };
//   const validationSchema = Yup.object().shape({
//     userName: Yup.string().required("Please enter your user name"),
//     password: Yup.string().required("Please enter your password"),
//   });
//   const { handleSubmit, errors, register } = useForm({
//     mode: "onSubmit",
//     defaultValues: initialValues,
//     resolver: yupResolver(validationSchema),
//   });
//   const onSubmit = (data) => {
//    return;
//   };
//   return (
//     <div className="App">
//       <div className="login-page">
//         <div className="main-content">
//           <div className="company-logo">
//             {/* Image should be in svg format */}
//             {/* <img src={Navigation} alt="navigation-logo" /> */}
//           </div>
//           <div className="form-content">
//             <h4 role="heading" aria-level="1">
//               Welcome!
//             </h4>
//             <p>Please login using your account</p>
//             <form onSubmit={handleSubmit(onSubmit)}>
//               <div className="form-group reset-password-fields login-fields">
//                 <label>USERNAME</label>
//                 <TextField
//                   type="text"
//                   margin="dense"
//                   variant="outlined"
//                   className="form-control"
//                   name="userName"
//                   inputRef={register}
//                   fullWidth
//                   error={Boolean(errors.userName?.message)}
//                 />
//                 <FormHelperText style={{ color: "red" }} variant="outlined">
//                   {errors.userName?.message ? errors.userName.message : ""}
//                 </FormHelperText>
//                 {/* <input
//                   type="text"
//                   className="form-control"
//                   value={userName}
//                   onChange={(e) => handleUserName(e)}
//                   aria-label="Username"
//                 /> */}
//               </div>
//               <div className="form-group reset-password-fields login-fields">
//                 <label>PASSWORD</label>
//                 <TextField
//                   type={passwordShown ? "text" : "password"}
//                   margin="dense"
//                   variant="outlined"
//                   className="form-control"
//                   name="password"
//                   inputRef={register}
//                   fullWidth
//                   error={Boolean(errors.password?.message)}
//                   InputProps={{
//                     // <-- This is where the toggle button is added.
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           className="visible-icon"
//                           aria-label="toggle password visibility"
//                           onClick={togglePassword}
//                         >
//                           {passwordShown ? <Visibility /> : <VisibilityOff />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />

//                 <FormHelperText style={{ color: "red" }} variant="outlined">
//                   {errors.password?.message ? errors.password.message : ""}
//                 </FormHelperText>
//                 {/* <input
//                   type={passwordShown ? "text" : "password"}
//                   className="form-control"
//                   placeholder=""
//                   value={passWord}
//                   onChange={(e) => handlePassword(e)}
//                 />
//                 <img
//                   src={openeye}
//                   alt="openeye-logo"
//                   className="password-img"
//                   onClick={() => togglePassword()}
//                 /> */}
//               </div>
//               <button
//                 type="submit"
//                 // onClick={onSubmit()}
//                 // eslint-disable-next-line react/no-unknown-property
//                 className="login-btn btn-block"
//               >
//                 LOGIN
//               </button>
//               <div className="more-info">
//                 <div className="forgot-pw">
//                   <Link to={{ pathname: `/forgot-password` }}>Forgot your password?</Link>
//                 </div>
//                 <div className="reset">{/* <a href="/"></a> */}</div>
//               </div>
//               <button type="button" className="signup-btn btn-block">
//                 CREATE AN ACCOUNT
//               </button>
//             </form>
//           </div>
//           <div className="copyright">
//             <p style={{ color: "#000" }}>&copy;2021 PDS Galaxy</p>
//           </div>
//         </div>
//       </div>
//       {/* {isLoading && <PageLoader />}
//       {(errorMsg || expiryMsg) && <ErrorSnackbar errorMsg={errorMsg || expiryMsg} />}

//       {successMsg && <SuccessSnackbar successMsg={successMsg} />} */}
//     </div>
//   );
// }

// export default App;
