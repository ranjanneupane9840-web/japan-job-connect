import { useState } from "react";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const login = () => {

    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (
      user.email === email &&
      user.password === password
    ) {

      alert("Login Successful");

    } else {

      alert("Invalid Email or Password");

    }

  };

  return (

    <div className="max-w-md mx-auto bg-white shadow p-8 my-10">

      <h1 className="text-3xl font-bold mb-5">
        Login
      </h1>

      <input
        className="border p-3 w-full mb-4"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        className="border p-3 w-full mb-4"
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-blue-700 text-white w-full p-3 rounded"
      >
        Login
      </button>

    </div>

  );

}

export default Login;