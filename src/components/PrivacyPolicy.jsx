import SectionTitle from "./SectionTitle";
import { APP_NAME, CONTACT_EMAIL, LAST_UPDATED } from "../constants/app";

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-5 py-16">
      <SectionTitle
        title="Privacy Policy"
        subtitle={`This policy explains how ${APP_NAME} handles user information.`}
      />

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
        {/* Header */}
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-gray-900">{APP_NAME}</p>
          <p className="text-xs text-gray-500">Last updated: {LAST_UPDATED}</p>
        </div>
        {/* Content */}
        <div className="prose prose-gray mt-6 max-w-none">
          {/* Overview */}
          <h3 className="text-lg font-semibold text-gray-900">Overview</h3>
          <p className="text-sm text-gray-700">
            {APP_NAME} is designed to function fully offline. The App does not
            collect, transmit, or share personal data with the developer or any
            third party. All information entered in the App remains only on the
            user’s device.
          </p>

          {/* Local storage */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Information Stored on the Device
          </h3>
          <p className="text-sm text-gray-700">
            Information such as required OJT hours, time logs, and progress data
            are stored locally on your device to provide core functionality.
            This data never leaves your device and is not accessible to the
            developer.
          </p>

          {/* No internet / tracking */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            No Internet Data Collection
          </h3>
          <p className="text-sm text-gray-700">
            Worklog does not require internet connectivity and does not use
            analytics services, advertisements, user accounts, or third-party
            tracking technologies.
          </p>

          {/* Security */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Data Security
          </h3>
          <p className="text-sm text-gray-700">
            Because all data is stored locally, the security of your information
            depends on the security of your device. Users are encouraged to
            enable protections such as passcodes, biometrics, or encryption.
          </p>

          {/* Retention */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Data Retention and Deletion
          </h3>
          <p className="text-sm text-gray-700">
            Your data remains on the device until it is deleted. Uninstalling
            the App, clearing device storage, or manually deleting logs may
            permanently remove stored information. The developer cannot recover
            deleted data.
          </p>

          {/* Children */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Children’s Privacy
          </h3>
          <p className="text-sm text-gray-700">
            Worklog is not intended for children under the age of 13 and does
            not knowingly collect personal information from children.
          </p>

          {/* Changes */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Changes to This Privacy Policy
          </h3>
          <p className="text-sm text-gray-700">
            This Privacy Policy may be updated from time to time. Any updates
            will be posted with a revised “Last updated” date.
          </p>

          {/* Contact */}
          <h3 className="mt-6 text-lg font-semibold text-gray-900">
            Contact Information
          </h3>
          <p className="text-sm text-gray-700">
            If you have questions or concerns about this Privacy Policy, you may
            contact the developer at:
            <br />
            <span className="font-semibold">{CONTACT_EMAIL}</span>
          </p>
        </div>
        {/* App Store note
        <div className="mt-8 rounded-2xl bg-blue-50 p-4 ring-1 ring-blue-100">
          <p className="text-sm text-blue-900">
            This Privacy Policy applies to the official version of {APP_NAME}
            &nbsp;available to users. A publicly accessible version of this page
            is provided to comply with app store requirements.
          </p>
        </div> */}
      </div>
    </section>
  );
}
