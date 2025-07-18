"use client";
import React from "react";

export default function PersonalInformation() {
  return (
    <main className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 p-8 text-gray-900 font-sans">
      <section>
        <h2 className="text-lg font-semibold flex items-center gap-2 mb-1">
          <i className="fas fa-user-circle text-lg" />
          Personal Information
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Update your personal details and contact information
        </p>

        <div className="flex flex-wrap items-center gap-6 mb-8">
          <div className="relative">
            <img
              src="https://storage.googleapis.com/a1aa/image/f26a30c7-7bb3-4a9b-c33d-085f6ea0314c.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full bg-blue-200"
              width={96}
              height={96}
            />
            <button
              type="button"
              aria-label="Change photo"
              className="absolute -bottom-1 -right-1 bg-black text-white p-2 rounded-full border border-white hover:bg-gray-900 transition"
            >
              <i className="fas fa-camera" />
            </button>
          </div>
          <div>
            <label className="block font-semibold text-sm mb-1">
              Profile Photo
            </label>
            <p className="text-xs text-gray-600 mb-2">
              Upload a photo to personalize your account
            </p>
            <button
              type="button"
              className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-600"
            >
              Change Photo
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-sm mb-1" htmlFor="full-name">
                Full Name
              </label>
              <input
                id="full-name"
                name="full-name"
                type="text"
                defaultValue="Ahmed Benali"
                className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="far fa-envelope" />
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  defaultValue="ahmed.benali@email.com"
                  className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold text-sm mb-1" htmlFor="phone">
                Phone Number
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="fas fa-phone" />
                </span>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  defaultValue="+213 555 123 456"
                  className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div>
              <label className="block font-semibold text-sm mb-1" htmlFor="location">
                Location
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="fas fa-map-marker-alt" />
                </span>
                <input
                  id="location"
                  name="location"
                  type="text"
                  defaultValue="Blida, Boufarik"
                  className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-sm mb-1" htmlFor="bio">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              rows="3"
              defaultValue="Experienced aquaculture farmer with 15 years in fish farming. Specializing in tilapia and carp production."
              className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block font-semibold text-sm mb-1" htmlFor="language">
                Preferred Language
              </label>
              <select
                id="language"
                name="language"
                defaultValue="ar"
                className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="ar">العربية (Arabic)</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <i className="fas fa-language" />
              </span>
            </div>

            <div className="relative">
              <label className="block font-semibold text-sm mb-1" htmlFor="timezone">
                Timezone
              </label>
              <select
                id="timezone"
                name="timezone"
                defaultValue="algeria"
                className="block w-full rounded-md border border-gray-200 py-2 pl-10 pr-3 text-sm appearance-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              >
                <option value="algeria">Algeria (GMT+1)</option>
                <option value="utc">UTC</option>
                <option value="est">Eastern Standard Time</option>
              </select>
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <i className="far fa-clock" />
              </span>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-black text-white font-semibold rounded-md px-6 py-3 text-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black"
            >
              <i className="fas fa-save" />
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
