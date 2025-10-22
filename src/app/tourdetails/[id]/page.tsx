// Any errors here will automatically be caught by error.tsx


import { mapTourDetailFromApi } from "@/entitiy/Tour";
import { TourDetail } from "@/components/TourDetail";
import axiosInstance from "@/utils/axisoInstance";
import { ACCTIVITY_API_URL } from "@/utils/constants";


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    // Await the params to get the id
    const { id } = await params;
    const url = `${ACCTIVITY_API_URL}/${id}`;

    const { data } = await axiosInstance.get(url);
    const tour = mapTourDetailFromApi(data);

    return (
        <div className="container mt-4">
            <TourDetail tour={tour} />
        </div>
    );
}