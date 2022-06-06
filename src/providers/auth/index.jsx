import { createContext, useContext } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "..";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const token = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const history = useHistory();

  const getUsers = async () => {
    await axios
      .get(`${url}/users`, token)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  const updateUser = async (id, data) => {
    await axios
      .patch(`${url}/users/${id}`, data, token)
      .then(() => {
        getUsers();
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };

  const login = async (user) => {
    await axios
      .post(`${url}/login`, user)
      .then((res) => {
        history.push("/dashboard");
        localStorage.setItem("token", res.data.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        toast("Seja bem vindo! 🐙");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Usuário ou senha incorretos! 🐙");
      });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    history.push("/");
  };

  return (
    <AuthContext.Provider
      value={{ login, users, logout, getUsers, token, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
