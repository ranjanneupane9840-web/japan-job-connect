import { useState } from "react";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const register = () => {

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful");

  };

  return (

    <div className="max-w-md mx-auto bg-white shadow p-8 my-10">

      <h1 className="text-3xl font-bold mb-5">
        Register
      </h1>

      <input
        className="border p-3 w-full mb-3"
        placeholder="Name"
        onChange={(e) =>
          setUser({ ...user, name: e.target.value })
        }
      />

      <input
        className="border p-3 w-full mb-3"
        placeholder="Email"
        onChange={(e) =>
          setUser({ ...user, email: e.target.value })
        }
      />

      <input
        className="border p-3 w-full mb-3"
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setUser({ ...user, password: e.target.value })
        }
      />

      <button
        onClick={register}
        className="bg-blue-700 text-white w-full p-3 rounded"
      >
        Register
      </button>

    </div>

  );

}

export default Register;