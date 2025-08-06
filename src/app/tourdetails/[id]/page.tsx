"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { mapTourDetailFromApi, TourDetail } from "@/entitiy/Tour";
import { ACCTIVITY_API_URL } from "@/utils/constants";

const TourDetails = () => {

    const params = useParams();
    const id = params?.id as string;
    const url = `${ACCTIVITY_API_URL}/${id}`;

    const [tour, setTour] = useState<TourDetail | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log("id:", id, "url:", url);
        if (id) {
            (async () => {
                try {
                    const { data } = await axios.get(url);
                    console.log("data:", data);
                    const mappedTour = mapTourDetailFromApi(data);
                    setTour(mappedTour);
                } catch (error) {
                    console.error("Unable to retrieve tour details:", error);
                    setError("Unable to retrieve tour details");
                }
            })();
        }
    }, [id, url]);

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!tour) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{tour.Name}</h1>
            <p>{tour.Description}</p>
            {/* Add more tour details as needed */}
        </div>
    );
};

export default TourDetails;