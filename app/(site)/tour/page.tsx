"use client";

import { useState } from "react";

function BookSchoolTour() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childrenCount: 1,
    preferredDate: "",
    preferredTime: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tour Request Submitted</h2>
          <p className="text-lg mb-6">
            Thank you, {formData.parentName}! Your request to tour the school has been received.
            We will contact you at {formData.email} or {formData.phone} to confirm the schedule.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="btn-primary py-3 px-6 text-lg"
          >
            Book Another Tour
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-card border-t border-border">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Book a School Tour
        </h2>

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="parentName"
            placeholder="Parent / Guardian Name"
            value={formData.parentName}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="number"
            name="childrenCount"
            min={1}
            placeholder="Number of Children Attending"
            value={formData.childrenCount}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <textarea
            name="notes"
            rows={4}
            placeholder="Additional Notes (optional)"
            value={formData.notes}
            onChange={handleChange}
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            type="submit"
            className="btn-primary w-full py-4 text-lg"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Book Tour"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default BookSchoolTour;
