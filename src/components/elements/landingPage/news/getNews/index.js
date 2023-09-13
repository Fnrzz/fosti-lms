import axios from "axios";

const GetNews = async () => {
  try {
    const response = await axios.get("URL_API_ANDA");
    return response.data; // Anda harus mengganti URL_API_ANDA dengan URL API sebenarnya.
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return [];
  }
};

export default GetNews;
