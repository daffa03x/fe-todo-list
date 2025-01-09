import axios from "axios";
import { getToken } from "../utils/token";

export async function register(name, email, password, password_confirmation) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/register", {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    return err;
  }
}

export async function login(email, password) {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getUser() {
  try {
    const token = getToken();
    const response = await axios.get("http://127.0.0.1:8000/api/user", {
      headers: {
        Authorization: `Bearer ${token}`, // Menambahkan Bearer token
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
