"use client";

import { ActivityType, Tour } from "@/entitiy/Tour";
import Link from "next/link";

interface ToursProps {
    tours: Tour[];
    error: string | null;
}

const Tours = ({ tours, error }: ToursProps) => {
    const renderTour = () => {
        if (!tours.length) return null;
        return tours.map((tour: Tour) => (
            <tr key={tour.Id}>
                <td>{tour.Name}</td>
                <td>{tour.Date}</td>
                <td>{tour.Length}</td>
                <td>{tour.AltitudeGain}</td>
                <td>{ActivityType[tour.ActivityType]}</td>
                <td>
                    <div>
                        <Link href={`/tourdetails/${tour.Id}`} className="link-button">Show</Link>
                    </div>
                </td>
            </tr>
        ));
    };

    return (
        <div>
            {error && <div className="alert alert-danger">{error}</div>}
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Length</th>
                            <th scope="col">Altitude</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTour()}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tours;
