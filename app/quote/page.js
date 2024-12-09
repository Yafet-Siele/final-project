'use client';
import Link from 'next/link';
import Script from 'next/script';
import React, { useState } from 'react';

export default function quoteGenerator() {

    const [description, setDescription] = useState('');

    const handleChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted Successful: ' + description);
    };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-[30px] w-full h-auto bg-black py-10 px-5">
      <div className="flex flex-col justify-start items-start gap-6 px-[45px] py-10 bg-black rounded-[22.19px] shadow border-4 border-[#61ff00] w-full max-w-[1192px]">
        
        {/* Name Fields */}
        <div className="flex flex-wrap justify-between gap-[30px] w-full">
          <div className="flex flex-col w-full sm:w-[48%]">
            <div className="text-white text-[22.89px] font-black font-['Inter']">Last Name</div>
            <div className="border-4 border-[#61ff00] px-6 py-2.5 w-full">
              <input
                placeholder="Last"
                className="bg-black text-white w-full text-[22.89px] font-black font-['Inter']"
              />
            </div>
          </div>
          <div className="flex flex-col w-full sm:w-[48%]">
            <div className="text-white text-[22.89px] font-black font-['Inter']">First Name</div>
            <div className="border-4 border-[#61ff00] px-6 py-2.5 w-full">
              <input
                placeholder="First Name"
                className="bg-black text-white w-full text-[22.89px] font-black font-['Inter']"
              />
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col w-full mt-6">
          <div className="text-white text-[22.89px] font-black font-['Inter']">Phone Number</div>
          <div className="border-4 border-[#61ff00] px-6 py-2.5 w-full">
            <input
              placeholder="Phone Number"
              className="bg-black text-white w-full text-[22.89px] font-black font-['Inter']"
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col w-full mt-6">
          <div className="text-white text-[22.89px] font-black font-['Inter']">Email</div>
          <div className="border-4 border-[#61ff00] px-6 py-2.5 w-full">
            <input
              placeholder="Email"
              type="email"
              className="bg-black text-white w-full text-[22.89px] font-black font-['Inter']"
            />
          </div>
        </div>
        {/* Description Field */}
        <div className="flex flex-col w-full mt-6">
                    <div className="text-white text-[22.89px] font-black font-['Inter']">Description</div>
                    <div className="border-4 border-[#61ff00] px-6 py-2.5 w-full">
                        <textarea
                            value={description}
                            onChange={handleChange}
                            placeholder="Enter a brief description"
                            className="bg-black text-white w-full text-[22.89px] font-black font-['Inter']"
                            rows="4"
                        />
                    </div>
                </div>

        {/* Submit Button */}
        <div className="flex justify-center items-center mt-6">
          <button className="bg-[#61ff00] text-black text-[25px] font-semibold font-['Inter'] py-[15px] px-[30px] rounded-[5px]">
            Submit
          </button>
        </div>
      </div>
      <script src="https://smtpjs.com/v3/smtp.js">
      </script>
      <Script 
                src="/script.js" 
                strategy="afterInteractive"
            />
        <Script 
                src="/script.js" 
                strategy="afterInteractive"
            />
    </form>
  );
}
