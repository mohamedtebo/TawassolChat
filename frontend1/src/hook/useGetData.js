import baseUrl from "../api/baseUrl";

export const useGetDataToken = async(url, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    }
    const res = await baseUrl.get(url, config);
    return res;
}