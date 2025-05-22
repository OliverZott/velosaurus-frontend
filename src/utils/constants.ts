export const LOCATION_API_URL = "http://localhost:8000/api/location";
export const ACCTIVITY_API_URL = "http://localhost:8000/api/activity";
let PAGE_SIZE = 10;

export function setPageSize(size: number) {
    PAGE_SIZE = size;
}

export function getActivityApiUrl(pageNumber: number = 1) {
    return `http://localhost:8000/api/activity?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
}
