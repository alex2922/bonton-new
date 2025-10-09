"use client";

import SectionTop from "@/components/SectionTop";


const careerOpportunities = () => {
  return (
    <>
 
      <SectionTop
        chip=""
        title="Career Opportunities"
        description="We encourage you to take a step ahead and get associated with us for a longer term. Bonton Cables always has its shutters up for challenging new positions in the company. Time to expand your comfort zone and enhance your experiences."
        imageUrl="/sectiontop/career.jpg"
        btnText=""
        link=""
      />

      <div className="parent py-[40px] bg-black/5">
        <div className="container flex items-center justify-center px-4">
          <div className="w-full h-full flex items-center justify-center">
            <div className=" w-full bg-white shadow-lg rounded-xl">
              <h2 className="font-bold text-2xl p-4 rounded-t-2xl mb-4 bg-gradient-to-r from-[var(--accent1)] to-emerald-500 text-white">Application Form</h2>

              <form action="#" className="w-full flex flex-col gap-8 p-4">
                <input type="text" placeholder="Name *" required />
                <input type="email" placeholder="Email *" required />
                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  placeholder="Phone Number *"
                  title="Enter a 10-digit number"
                  required
                />
                <input type="text" placeholder="Current Employer" />
                <textarea rows={3} placeholder="Address *" required />
                <input type="text" placeholder="Area of Operations" />
                <textarea rows={4} placeholder="Comments" />
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-black">
                    Upload Resume *
                  </label>
                  <input 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--accent1)] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--accent1)] file:text-white hover:file:bg-[var(--accent1)]/90"
                  />
                  <p className="text-xs text-black">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
                <button type="submit" className="btn mt-8">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default careerOpportunities;
