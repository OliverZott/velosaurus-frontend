// server-only env vars (no NEXT_PUBLIC_ prefix): read at runtime, so one docker image works with any api url
export const ACTIVITY_API_URL = process.env.ACTIVITY_API_URL;
export const LOCATION_API_URL = process.env.LOCATION_API_URL;

let PAGE_SIZE = 10;

export function setPageSize(size: number) {
  PAGE_SIZE = size;
}

export function getActivityApiUrl(pageNumber: number = 1) {
  return `${ACTIVITY_API_URL}?pageNumber=${pageNumber}&pageSize=${PAGE_SIZE}`;
}
