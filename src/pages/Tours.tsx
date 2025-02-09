import axios from "axios";
import { useEffect, useState } from "react";
import { Tour, ActivityType } from "../entity/Tour";
import { Link } from "react-router-dom";

// TODO: chsnge scopes/namings   ...tour->activity, mountain->location
const Tours = () => {
    const url = "https://localhost:7019/api/activity";  // local dev
    // const url = "http://localhost:8000/api/activity";  // docker dev
    // const url = "https://velosaurus-api.azurewebsites.net/api/tour";

    const [tours, setTours] = useState<Tour[]>([]);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        (
            async () => {
                try {
                    const { data } = await axios.get(url);
                    setTours(data.Items);
                    setError(null); // Clear previous errors
                }
                catch (err) {
                    setError("Unable to retrive data");
                }
            }
        )()
    }, []);

    const renderTour = () => {
        if (!tours.some) return;
        return tours.map((tour: Tour) => {
            return (
                <tr key={tour.Id}>
                    <td>{tour.Name}</td>
                    <td>{tour.Date}</td>
                    <td>{tour.Length}</td>
                    <td>{tour.AltitudeGain}</td>
                    <td>{ActivityType[tour.ActivityType]}</td>
                    <td>
                        <div>
                            <Link to={`/tourdetails/${tour.Id}`} state={{ data: tour }} className="btn btn-sm btn-outline-secondary">Show</Link>
                        </div>
                    </td>
                </tr>
            )
        })
    }


    return (
        <div>
            <h1>Tours</h1>
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
    )
}

export default Tours;