import { safeReturnPath } from "@/utils/formState";
import LocationForm from "./LocationForm";

export default async function NewLocationPage({
  searchParams,
}: {
  searchParams: Promise<{ returnTo?: string }>;
}) {
  // e.g. /locations/new?returnTo=/tours/new goes back to the tour form after saving
  const { returnTo } = await searchParams;

  return (
    <div className="mt-3">
      <h2>New location</h2>
      <LocationForm returnTo={safeReturnPath(returnTo, "/tours")} />
    </div>
  );
}
