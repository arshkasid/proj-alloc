import { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [token, setTokenState] = useState(null);

  useEffect(() => {
    console.log(token);
  }, [token]);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const getObject = await axios({
      method: "POST",
      url: "http://localhost:3000/api/v1/user/login",
      data: {
        regno: formData.username,
        password: formData.password,
      },
    });

    setTokenState(getObject.data.token); //token state gets updated

    setFormData({
      username: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        id="username"
        autoComplete="username"
        value={formData.username}
        onChange={handleChange}
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Password"
      />
      <button
        type="submit"
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Save
      </button>
    </form>
  );
}
export default Login;
