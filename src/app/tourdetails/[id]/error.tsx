// for testing e.g.: http://localhost:3000/tourdetails/42 


'use client'; // Error components must be Client Components

import { useEffect } from 'react';


export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Optionally log the error to an error reporting service
        console.error('Tour details error:', error);
    }, [error]);

    return (
        <div className="container mt-4">
            <div className="alert alert-danger">
                <h2>Something went wrong loading the tour!</h2>
                <p>{error.message}</p>
                <button
                    className="btn btn-primary mt-2"
                    onClick={reset}  // Attempts to recover by trying to re-render
                >
                    Try again
                </button>
            </div>
        </div>
    );
}