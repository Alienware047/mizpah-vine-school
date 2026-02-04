function ApplicationForm() {
  return (
    <section
      id="apply-form"
      className="py-20 bg-card border-t border-border"
    >
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          New Student Application Form
        </h2>

        <form className="grid gap-6">
          {/* Child Details */}
          <input
            type="text"
            placeholder="Child's Full Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="date"
            placeholder="Date of Birth"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <select
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>

          <select
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select Class / Level</option>
            <option>Early Years</option>
            <option>Primary</option>
            <option>Secondary</option>
          </select>

          <input
            type="text"
            placeholder="Previous School (if any)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Parent / Guardian Details */}
          <input
            type="text"
            placeholder="Parent / Guardian Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Emergency Contact */}
          <input
            type="text"
            placeholder="Emergency Contact Name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          <input
            type="tel"
            placeholder="Emergency Contact Phone"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Medical Info */}
          <textarea
            rows={3}
            placeholder="Medical Conditions / Allergies (if any)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Preferred Start Date */}
          <input
            type="date"
            placeholder="Preferred Start Date"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Additional Info */}
          <textarea
            rows={4}
            placeholder="Additional information (optional)"
            className="w-full rounded-lg border border-border bg-background px-4 py-3"
          />

          {/* Consent */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-primary border-border rounded focus:ring-2 focus:ring-primary"
            />
            <span>I agree to the school's policies and terms</span>
          </label>

          <button
            type="submit"
            className="btn-primary w-full py-4 text-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

export default ApplicationForm;
