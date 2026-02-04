"use client";
import SectionWrapper from "../sectionwrapper";

export default function ContactSection() {
  return (
    <div className="relative py-16 overflow-hidden"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-muted mb-4">We’d love to hear from you! Reach out for inquiries or to book a tour.</p>
          <ul className="text-muted space-y-2 mb-6">
            <li>📍 Address: MCVX+GV, Kumasi, Ghana</li>
            <li>📞 Phone: 050 389 2532</li>
            <li>✉️ Email: info@mvaschoolgh.com</li>
          </ul>

          <div className="flex gap-4">
            <a href="#" className="btn-primary">Apply Now</a>
            <a href="#" className="btn-primary">Book a Tour</a>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg border border-border">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.356!2d-1.540000!3d6.680000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdbb9f07d7d99cd%3A0x123456789!2sMizpah%20Vine%20Ark%20School!5e0!3m2!1sen!2sgh!4v1674845123456!5m2!1sen!2sgh"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
