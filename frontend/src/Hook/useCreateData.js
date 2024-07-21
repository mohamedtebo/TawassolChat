import BaseUrl from "../Api/BaseUrl"

export const useCreateData = async(url, params) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        }
    }

    const res = await BaseUrl.post(url, params, config);
    return res;
}