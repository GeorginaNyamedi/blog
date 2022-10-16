import React, { useState } from "react";
import { httpClient } from "../services/httpClient";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [data, setData] = useState({
     email: "",  password:"",
    })
  const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState(

  )
  const navigate = useNavigate();

  const handleSubmit = async (e) => { e.preventDefault()

    try {
        const res = await httpClient.post("/auth/login", data); 
        localStorage.setItem("token", res.data);
        navigate.push("/");
    } catch (error) {
        setError(error.message)
    }
};

  return (
    <div className="min-h-[calc(100vh_-_68px)] flex flex-col justify-center items-center">
      <h3 className="text-3xl mb-7">Login</h3>
      <form className="border-2 max-w-xl w-full p-5 rounded space-y-3" onSubmit={handleSubmit}>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <div>
          <label htmlFor="title" className="block text-xl">
            Title
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="border w-full p-1 outline-none mt-2" onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="body" className="block text-xl">
            Body
          </label>
           <input
            type="password"
            id="password"
            name="password"
            className="border w-full p-1 outline-none mt-2" onChange={handleChange} />
          </div>
           <div>
          <button className="border border-cyan-500 px-7 py-2 rounded text-cyan-500 hover:bg-cyan-500 hover:text-white duration-200 ">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;