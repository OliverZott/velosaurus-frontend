"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { Tour } from "@/entitiy/Tour";

const TourDetails = () => {
    const params = useParams();
    const { id } = params;
    const [tour, setTour] = useState<Tour | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            (async () => {
                try {
                    const { data } = await axios.get(`https://localhost:7019/api/activity/${id}`);
                    setTour(data);
                } catch (error) {
                    console.error("Unable to retrieve tour details:", error);
                    setError("Unable to retrieve tour details");
                }
            })();
        }
    }, [id]);

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