import axios from "axios";
import { getToken, removeToken } from "../utils/token";

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

export async function logout() {
  try {
    const token = getToken(); // Ambil token
    // console.log("Token:", token); // Log token untuk debug

    const response = await axios.post(
      "http://127.0.0.1:8000/api/logout",
      {}, // Body kosong karena tidak dibutuhkan
      {
        headers: {
          Authorization: `Bearer ${token}`, // Header Bearer token
        },
      }
    );

    if (response.data) {
      console.log("Logout berhasil");
      removeToken(); // Hapus token dari storage
      return response.data; // Return respons data
    } else {
      console.log("Gagal logout:", response.data.message || "Tidak diketahui");
    }
  } catch (err) {
    // Log kesalahan secara detail
    console.log("Kesalahan saat logout:");
    console.log("Status Code:", err.response?.status || "Tidak tersedia");
    console.log("Response Data:", err.response?.data || "Tidak tersedia");
    console.log("Message:", err.message || "Tidak tersedia");
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
