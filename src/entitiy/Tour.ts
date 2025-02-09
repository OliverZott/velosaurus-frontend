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