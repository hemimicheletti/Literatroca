import { useContext, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { url } from "..";
export const RegisterContext = createContext();
export const RegisterProvider = ({ children }) => {
  const history = useHistory();
  const userRegister = (user) => {
    axios
      .post(`${url}/register`, user)
      .then((res) => {
        console.log(res.data);
        toast.success("Usuário cadastrado com sucesso! 🐙");
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao cadastrar usuário! 🐙");
      });
  };
  return (
    <RegisterContext.Provider value={{ userRegister }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
