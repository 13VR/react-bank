// import "./index.css";
// import { useState } from "react";
// import Button from "../../component/button";
// import Title from "../../component/title";

// import Grid from "../../component/grid";
// import Arrow from "../../component/back-button";

// import Input from "../../component/input";

// import axios from "axios";
// import { NavLink } from "react-router-dom";

// export default function SignUp() {
//   // const [value, setValue] = useState({ email: "", password: "" });
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState(null);

//   // const handleChange = (e) => setValue(e.target.value);
//   // const handleChange = (e) => {
//   //   setValue({
//   //     email: e.target.value,
//   //     password: e.target.value,
//   //   });
//   // };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   // function handleChange(e) {
//   //   if (setValue.email === "email") setValue.email(e.target.value);
//   //   if (setValue.password === "password") setValue.password(e.target.value);

//   //   // setValue({
//   //   //   email: e.target.value,
//   //   //   password: e.target.value,
//   //   // });
//   // }
//   const handleSubmit = async () => {
//     if (email.length === 0 || password.length === 0) return null;

//     try {
//       const response = await axios.post("", {
//         email,
//         password,
//       });
//       if (response.status === 200) {
//         console.log("Ok");
//         setEmail("");
//         setPassword("");
//         setIsSuccess(true);
//       } else {
//         throw new Error("Error");
//       }
//     } catch (error) {
//       console.error(error);
//       setError("Error");
//     }
//   };
//   const isDisabled = email.length === 0 || password.length === 0;

//   return (
//     <Grid>
//       <Arrow />
//       <div className="custom_page">
//         <header className="custom_header">
//           <Title
//             title={"Sign Up!"}
//             description={"Choose a registration method"}
//           />
//           <Input
//             id="email"
//             onChange={handleEmailChange}
//             value={email}
//             title={"Email"}
//             text={"Email"}
//             type={"email"}
//           />
//           <Input
//             pass
//             id="password"
//             onChange={handlePasswordChange}
//             value={password}
//             title={"Password"}
//             text={"Password"}
//             type={"password"}
//           />
//           <span className="info">
//             Already have an account? <a href="/signin">Sign In</a>
//           </span>
//         </header>

//         <Button onClick={handleSubmit} disabled={isDisabled}>
//           <NavLink
//             className={"button_text"}
//             to={isSuccess ? "/signup-confirm" : ""}
//           >
//             {" "}
//             Continue
//           </NavLink>
//         </Button>

//         {error && <div>{error}</div>}

//         <pre>email: {email}</pre>

//         <pre>password: {password}</pre>
//       </div>
//     </Grid>
//   );
// }
