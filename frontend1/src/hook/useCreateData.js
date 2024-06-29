import { useSelector } from "react-redux"
import baseUrl from "../api/baseUrl";

export const useCreateData = async(url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const res = await baseUrl.post(url, params, config);
    return res;
}