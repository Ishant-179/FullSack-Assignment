import { createContext, useState, useEffect } from "react";
import API from "../api";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const { data } = await API.get("/users");
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users", error);
    }
  };

  const registerUser = async (form, file) => {
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("password", form.password);
      if (file) formData.append("profilePic", file);

      const { data } = await API.post("/users/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(data.message || "User registered successfully");
      getUsers();
      return true;
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
      return false;
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <UserContext.Provider value={{ users, registerUser, getUsers }}>
      {children}
    </UserContext.Provider>
  );
};
