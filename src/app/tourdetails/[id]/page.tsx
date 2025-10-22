import { mapTourDetailFromApi } from "@/entitiy/Tour";
import { TourDetail } from "@/components/TourDetail";
import axiosInstance from "@/utils/axisoInstance";
import { ACCTIVITY_API_URL } from "@/utils/constants";

export default async function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    const url = `${ACCTIVITY_API_URL}/${id}`;

    try {
        const { data } = await axiosInstance.get(url);

        if (!data) {
            throw new Error('Tour not found');
        }

        const tour = mapTourDetailFromApi(data);

        return (
            <div className="container mt-4">
                <TourDetail tour={tour} />
            </div>
        );
    } catch (error) {
        // This error will be caught by error.tsx
        throw new Error(error instanceof Error ? error.message : 'Failed to load tour');
    }
}