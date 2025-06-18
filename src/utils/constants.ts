export const ACCTIVITY_API_URL = process.env.NEXT_PUBLIC_ACCTIVITY_API_URL;
export const LOCATION_API_URL = process.env.NEXT_PUBLIC_LOCATION_API_URL;

let PAGE_SIZE = 10;

export function setPageSize(size: number) {
    PAGE_SIZE = size;
}

export function getActivityApiUrl(pageNumber: number = 1) {
    return `${ACCTIVITY_API_URL}?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
}
