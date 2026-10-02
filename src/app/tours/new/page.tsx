import type { Location } from "@/entity/Location";
import axiosInstance from "@/utils/axisoInstance";
import { LOCATION_API_URL } from "@/utils/constants";
import ActivityForm from "./ActivityForm";

// load locations on every request (otherwise next build would prerender the page once)
export const dynamic = "force-dynamic";

export default async function NewTourPage() {
  let locations: Location[] = [];
  let loadError = false;

  try {
    const { data } = await axiosInstance.get<Location[]>(`${LOCATION_API_URL}`);
    locations = data;
  } catch (error) {
    console.error("Unable to load locations:", error);
    loadError = true;
  }

  return (
    <div className="mt-3">
      <h2>New tour</h2>
      {loadError && (
        <div className="alert alert-warning">
          Locations could not be loaded, you can still save without one.
        </div>
      )}
      <ActivityForm locations={locations} />
    </div>
  );
}
