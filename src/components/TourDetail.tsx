import { TourDetail as TourDetailType } from "@/entitiy/Tour";

interface TourDetailProps {
    tour: TourDetailType;
}

export function TourDetail({ tour }: TourDetailProps) {
    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{tour.Name}</h1>
                <div className="row">
                    <div className="col-md-8">
                        <p className="card-text">{tour.Description}</p>
                        <div className="tour-stats mt-4">
                            <div className="row">
                                <div className="col-6 col-md-3">
                                    <h6 className="text-muted">Length</h6>
                                    <p>{tour.Length} km</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h6 className="text-muted">Altitude Gain</h6>
                                    <p>{tour.AltitudeGain} m</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h6 className="text-muted">Date</h6>
                                    <p>{tour.Date}</p>
                                </div>
                                <div className="col-6 col-md-3">
                                    <h6 className="text-muted">Type</h6>
                                    <p>{tour.ActivityType}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}