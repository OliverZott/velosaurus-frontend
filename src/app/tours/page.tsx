// Setup for SSR (server side rendering)  where page.tsx does the api request and Tours renders it on client side

import { Tour } from "@/entitiy/Tour";
import Tours from "./Tours";
import axiosInstance from "@/utils/axisoInstance";


const ToursPage = async () => {
    const url = "https://localhost:7019/api/Activity?pageNumber=1&pageSize=10";  // local dev
    // const url = "http://localhost:5019/api/activity";  // local http dev /
    // const url = "http://localhost:8000/api/activity";  // docker dev
    // const url = "https://velosaurus-api.azurewebsites.net/api/tour";

    let tours: Tour[] = [];
    let errorMessage: string | null = null;


    try {
        const response = await axiosInstance.get(url);
        tours = response.data.Items;
    } catch (error) {
        console.error("Unable to retrieve data:", error);
        if (error instanceof Error) {
            errorMessage = error.name;
        } else {
            errorMessage = "An unknown error occurred";
        }
    }

    return (
        <div>
            <Tours tours={tours} error={errorMessage} />
        </div>
    );
}

export default ToursPage;