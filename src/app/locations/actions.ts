"use server";

import { redirect } from "next/navigation";
import axiosInstance from "@/utils/axisoInstance";
import { LOCATION_API_URL } from "@/utils/constants";
import { type FormState, getErrorMessage, safeReturnPath } from "@/utils/formState";

// runs on the server: the browser posts the form here, this calls the api
export async function createLocation(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    await axiosInstance.post(`${LOCATION_API_URL}`, {
      name: formData.get("name"),
      region: formData.get("region") || null,
    });
  } catch (error) {
    return { error: getErrorMessage(error) };
  }

  redirect(safeReturnPath(formData.get("returnTo"), "/tours"));
}
