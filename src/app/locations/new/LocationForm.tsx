"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createLocation } from "../actions";

export default function LocationForm({ returnTo }: { returnTo: string }) {
  const [state, formAction, pending] = useActionState(createLocation, {});

  return (
    <form action={formAction} className="card">
      <div className="card-body">
        <input type="hidden" name="returnTo" value={returnTo} />

        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="e.g. Mutters"
              required
              maxLength={50}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="region" className="form-label">
              Region
            </label>
            <input
              id="region"
              name="region"
              className="form-control"
              placeholder="e.g. Stubaier Alpen"
              maxLength={50}
            />
          </div>
        </div>

        {state.error && <div className="alert alert-danger mt-3 mb-0">{state.error}</div>}

        <div className="mt-4">
          <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? "Saving..." : "Save location"}
          </button>
          <Link href={returnTo} className="btn btn-outline-secondary ms-2">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
