"use server";

import { redirect } from "next/navigation";
import axiosInstance from "@/utils/axisoInstance";
import { ACTIVITY_API_URL } from "@/utils/constants";
import { type FormState, getErrorMessage } from "@/utils/formState";

// runs on the server: the browser posts the form here, this calls the api
export async function createActivity(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const date = formData.get("date")?.toString();

  try {
    await axiosInstance.post(`${ACTIVITY_API_URL}`, {
      name: formData.get("name"),
      date: date ? `${date}T00:00:00Z` : undefined, // api stores utc, empty date = now
      length: Number(formData.get("length")),
      altitudeGain: Number(formData.get("altitudeGain")),
      activityType: formData.get("activityType"),
      description: formData.get("description") ?? "",
      locationId: Number(formData.get("locationId")) || 0, // 0 = no location
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  redirect("/tours");
}
