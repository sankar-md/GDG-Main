import React, { useState } from "react";
import background from "./assets/bg.jpg";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <img className="w-full h-full object-cover" src={background} alt="" />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">
          {/* Left Section */}
          <div className="bg-[#001829] text-white p-8 md:w-2/5 relative flex flex-col min-h-[400px]">
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-2">
                Contact Information
              </h2>
              <p className="text-gray-300 mb-8">
                Say something to start a live chat!
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="break-words">+1012 3456 789</span>
                </div>

                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="break-words">demo@gmail.com</span>
                </div>

                <div className="flex items-start space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mt-1 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="break-words">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </span>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                >
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    style={{ fill: "#5865f2" }}
                  />
                  <path d="M689.43 349a422.21 422.21 0 0 0-104.22-32.32 1.58 1.58 0 0 0-1.68.79 294.11 294.11 0 0 0-13 26.66 389.78 389.78 0 0 0-117.05 0 269.75 269.75 0 0 0-13.18-26.66 1.64 1.64 0 0 0-1.68-.79A421 421 0 0 0 334.44 349a1.49 1.49 0 0 0-.69.59c-66.37 99.17-84.55 195.9-75.63 291.41a1.76 1.76 0 0 0 .67 1.2 424.58 424.58 0 0 0 127.85 64.63 1.66 1.66 0 0 0 1.8-.59 303.45 303.45 0 0 0 26.15-42.54 1.62 1.62 0 0 0-.89-2.25 279.6 279.6 0 0 1-39.94-19 1.64 1.64 0 0 1-.16-2.72c2.68-2 5.37-4.1 7.93-6.22a1.58 1.58 0 0 1 1.65-.22c83.79 38.26 174.51 38.26 257.31 0a1.58 1.58 0 0 1 1.68.2c2.56 2.11 5.25 4.23 8 6.24a1.64 1.64 0 0 1-.14 2.72 262.37 262.37 0 0 1-40 19 1.63 1.63 0 0 0-.87 2.28 340.72 340.72 0 0 0 26.13 42.52 1.62 1.62 0 0 0 1.8.61 423.17 423.17 0 0 0 128-64.63 1.64 1.64 0 0 0 .67-1.18c10.68-110.44-17.88-206.38-75.7-291.42a1.3 1.3 0 0 0-.63-.63zM427.09 582.85c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.02 28.44-20.37 51.6-46 51.6zm170.13 0c-25.23 0-46-23.16-46-51.6s20.38-51.6 46-51.6c25.83 0 46.42 23.36 46 51.6.01 28.44-20.17 51.6-46 51.6z" />
                </svg>
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                >
                  <circle
                    cx="512"
                    cy="512"
                    r="512"
                    style={{ fill: "#e4405f" }}
                  />
                  <path d="M512 256c-69.5 0-78.2.3-105.5 1.5-27.3 1.3-45.8 5.6-62.1 11.9-16.8 6.5-31.1 15.3-45.4 29.5s-23 28.5-29.5 45.4c-6.3 16.3-10.6 34.9-11.9 62.1-1.3 27.3-1.5 36-1.5 105.5s.3 78.2 1.5 105.5c1.3 27.2 5.6 45.8 11.9 62.1 6.5 16.8 15.3 31.1 29.5 45.4 14.2 14.2 28.5 23 45.4 29.5 16.3 6.3 34.9 10.6 62.1 11.9 27.3 1.3 36 1.5 105.5 1.5s78.2-.3 105.5-1.5c27.2-1.3 45.8-5.6 62.1-11.9 16.8-6.5 31.1-15.3 45.4-29.5 14.2-14.2 23-28.5 29.5-45.4 6.3-16.3 10.6-34.9 11.9-62.1 1.3-27.3 1.5-36 1.5-105.5s-.3-78.2-1.5-105.5c-1.3-27.2-5.6-45.8-11.9-62.1-6.5-16.8-15.3-31.1-29.5-45.4-14.2-14.2-28.5-23-45.4-29.5-16.3-6.3-34.9-10.6-62.1-11.9-27.3-1.2-36-1.5-105.5-1.5zm0 46.1c68.3 0 76.5.3 103.5 1.5 25 1.2 38.5 5.3 47.5 8.9 12 4.6 20.5 10.2 29.5 19.1 8.9 9 14.5 17.5 19.1 29.5 3.5 9 7.7 22.5 8.8 47.5 1.2 27 1.5 35.1 1.5 103.5s-.3 76.5-1.6 103.5c-1.3 25-5.5 38.5-9 47.5-4.8 12-10.2 20.5-19.2 29.5-8.9 8.9-17.6 14.5-29.4 19.1-9 3.5-22.7 7.7-47.7 8.8-27.2 1.2-35.2 1.5-103.7 1.5s-76.5-.3-103.7-1.6c-25-1.3-38.7-5.5-47.7-9-12.1-4.8-20.5-10.2-29.4-19.2-9-8.9-14.7-17.6-19.2-29.4-3.5-9-7.7-22.7-9-47.7-1-26.9-1.3-35.2-1.3-103.3 0-68.2.3-76.5 1.3-103.7 1.3-25 5.4-38.7 9-47.7 4.5-12.2 10.2-20.5 19.2-29.5 8.9-8.9 17.3-14.7 29.4-19.2 9-3.5 22.4-7.7 47.4-9 27.2-1 35.2-1.3 103.7-1.3l1 .7zm0 78.4c-72.6 0-131.5 58.9-131.5 131.5S439.4 643.5 512 643.5 643.5 584.6 643.5 512 584.6 380.5 512 380.5zm0 216.8c-47.1 0-85.3-38.2-85.3-85.3s38.2-85.3 85.3-85.3 85.3 38.2 85.3 85.3-38.2 85.3-85.3 85.3zm167.4-221.9c0 17-13.8 30.7-30.7 30.7-17 0-30.7-13.8-30.7-30.7s13.8-30.7 30.7-30.7c16.9-.1 30.7 13.7 30.7 30.7z" />
                </svg>
              </div>

              <div className="w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-11 w-11"
                  viewBox="0 0 48 48"
                  fill="currentColor"
                >
                  <circle cx="24" cy="24" r="20" style={{ fill: "#1DA1F2" }} />
                  <path d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="p-8 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 mb-4">Select Subject?</p>
                <div className="flex flex-wrap gap-6">
                  {Array(4)
                    .fill("General Inquiry")
                    .map((subject, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="radio"
                          name="subject"
                          value={subject}
                          checked={formData.subject === subject}
                          onChange={handleChange}
                          className="form-radio text-[#001829]"
                        />
                        <span className="text-sm text-gray-600">{subject}</span>
                      </label>
                    ))}
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-0 py-2 border-b border-gray-300 focus:border-blue-500 outline-none resize-none"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#001829] text-white px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
