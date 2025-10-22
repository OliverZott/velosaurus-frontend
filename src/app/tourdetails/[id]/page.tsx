import { mapTourDetailFromApi } from "@/entitiy/Tour";
import { TourDetail } from "@/components/TourDetail";
import axiosInstance from "@/utils/axisoInstance";
import { ACCTIVITY_API_URL } from "@/utils/constants";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const url = `${ACCTIVITY_API_URL}/${id}`;

    try {
        const { data } = await axiosInstance.get(url);
        const tour = mapTourDetailFromApi(data);

        return (
            <div className="container mt-4">
                <TourDetail tour={tour} />
            </div>
        );
    } catch (error) {
        console.error("Unable to retrieve tour details:", error);
        return (
            <div className="alert alert-danger">
                Unable to retrieve tour details
            </div>
        );
    }
}