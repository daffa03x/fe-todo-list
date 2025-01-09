import axios from "axios";
import { getToken } from "../utils/token";

export async function getCheckList() {
  try {
    const token = getToken();
    const response = await axios.get("http://127.0.0.1:8000/api/checklist", {
      headers: {
        Authorization: `Bearer ${token}`, // Menambahkan Bearer token
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function postCheckList() {
  try {
    const token = getToken();
    const response = await axios.post("http://127.0.0.1:8000/api/checklist", {
      headers: {
        Authorization: `Bearer ${token}`, // Menambahkan Bearer token
      },
      body: {
        user_id: user_id,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
