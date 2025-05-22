// Setup for SSR (server side rendering)  where page.tsx does the api request and Tours renders it on client side

import { mapTourFromApi, Tour } from "@/entitiy/Tour";
import Tours from "./Tours";
import axiosInstance from "@/utils/axisoInstance";
import { getActivityApiUrl, setPageSize } from "@/utils/constants";


const ToursPage = async () => {
    setPageSize(10);
    const url = getActivityApiUrl(1);

    let tours: Tour[] = [];
    let errorMessage: string | null = null;

    try {
        const response = await axiosInstance.get(url);
        tours = response.data.items.map(mapTourFromApi);
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