"use client";

import Link from "next/link";
import { useActionState } from "react";
import type { Location } from "@/entity/Location";
import { ACTIVITY_TYPES } from "@/entity/Tour";
import { createActivity } from "../actions";

export default function ActivityForm({ locations }: { locations: Location[] }) {
  const [state, formAction, pending] = useActionState(createActivity, {});
  const today = new Date().toISOString().slice(0, 10);

  return (
    <form action={formAction} className="card">
      <div className="card-body">
        <div className="row g-3">
          <div className="col-md-8">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              className="form-control"
              placeholder="e.g. Arzler Alm Trail"
              required
              maxLength={50}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="date" className="form-label">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              className="form-control"
              defaultValue={today}
              required
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="activityType" className="form-label">
              Type
            </label>
            <select
              id="activityType"
              name="activityType"
              className="form-select"
              defaultValue="Bike"
            >
              {ACTIVITY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="length" className="form-label">
              Length (km)
            </label>
            <input
              id="length"
              name="length"
              type="number"
              min={0}
              step={0.1}
              className="form-control"
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="altitudeGain" className="form-label">
              Altitude gain (m)
            </label>
            <input
              id="altitudeGain"
              name="altitudeGain"
              type="number"
              min={0}
              step={1}
              className="form-control"
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="locationId" className="form-label">
              Location
            </label>
            <div className="input-group">
              <select id="locationId" name="locationId" className="form-select" defaultValue="">
                <option value="">- none -</option>
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.region ? `${location.name} (${location.region})` : location.name}
                  </option>
                ))}
              </select>
              <Link href="/locations/new?returnTo=/tours/new" className="btn btn-outline-secondary">
                + New location
              </Link>
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              rows={3}
              maxLength={250}
            />
          </div>
        </div>

        {state.error && <div className="alert alert-danger mt-3 mb-0">{state.error}</div>}

        <div className="mt-4">
          <button type="submit" className="btn btn-primary" disabled={pending}>
            {pending ? "Saving..." : "Save tour"}
          </button>
          <Link href="/tours" className="btn btn-outline-secondary ms-2">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
