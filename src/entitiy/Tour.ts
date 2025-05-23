export interface Tour {

    Id: string,
    Name: string,
    Date: string,
    Length: number,
    AltitudeGain: number,
    ActivityType: ActivityType
    Description: string,
}

export enum ActivityType {
    MountainBike,
    Nordic,
    Ski
}

interface ApiTour {
    id: string | number;
    name: string;
    date: string;
    length: number;
    altitudeGain: number;
    activityType: ActivityType;
    description?: string;
}

export function mapTourFromApi(apiTour: ApiTour): Tour {
    return {
        Id: apiTour.id.toString(),
        Name: apiTour.name,
        Date: apiTour.date,
        Length: apiTour.length,
        AltitudeGain: apiTour.altitudeGain,
        ActivityType: apiTour.activityType,
        Description: apiTour.description ?? "", // fallback if missing
    };
}