import SectionTitle from "./SectionTitle";
import Card from "./Card";
import { APP_NAME, CONTACT_EMAIL, LAST_UPDATED } from "../constants/app";

// Same layout as the app's Privacy Policy screen: a muted section label above
// each card.
const SECTIONS = [
  {
    heading: "Overview",
    body: `${APP_NAME} is designed to function fully offline. The App does not collect, transmit, or share personal data with the developer or any third party. All information entered in the App remains only on the user’s device. The App does not collect any personal or sensitive user data as defined by Google Play’s Data Safety requirements.`,
  },
  {
    heading: "Information Stored on the Device",
    body: "Information such as required OJT hours, time logs, progress data, notes, and app preferences are stored locally on your device to provide core functionality. If you fill in your profile (such as your name, student ID, school, company, and supervisor details), it is also stored only on your device and is used solely to fill in the PDF reports you generate. This data never leaves your device and is not accessible to the developer.",
  },
  {
    heading: "Backups and Reports",
    body: "When you export a backup or generate a PDF report, the file is created on your device. On Android, backups are saved to your Downloads folder; on iOS, you choose where to save or share the file. Once you save or share a file outside the App, its handling is under your control and subject to the policies of the service you use. Restoring a backup reads only the file you select.",
  },
  {
    heading: "Notifications and Permissions",
    body: "If you turn on daily reminders, the App asks for notification permission and schedules reminders locally on your device. No notification data is sent to any server. On some older Android versions, the App may request storage permission to save backups and reports. You can turn off reminders or revoke permissions at any time in the App or your device settings.",
  },
  {
    heading: "No Internet Data Collection",
    body: "Worklog does not require internet connectivity and does not use analytics services, advertisements, user accounts, or third-party tracking technologies.",
  },
  {
    heading: "Data Security",
    body: "Because all data is stored locally, the security of your information depends on the security of your device. Users are encouraged to enable protections such as passcodes, biometrics, or encryption.",
  },
  {
    heading: "Data Retention and Deletion",
    body: "Your data remains on the device until it is deleted. Uninstalling the App, clearing device storage, or manually deleting logs may permanently remove stored information. The developer cannot recover deleted data.",
  },
  {
    heading: "Children’s Privacy",
    body: "The App does not knowingly collect personal information from anyone, including children.",
  },
  {
    heading: "Changes to This Privacy Policy",
    body: "This Privacy Policy may be updated from time to time. Any updates will be posted with a revised “Last updated” date.",
  },
];

function Section({ heading, children }) {
  return (
    <div className="space-y-2.5">
      <h2 className="text-[11px] font-bold uppercase tracking-[0.08em] text-muted">
        {heading}
      </h2>
      <Card className="p-5">{children}</Card>
    </div>
  );
}

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="mx-auto max-w-3xl px-4 py-12">
      <SectionTitle
        kicker="Legal"
        title="Privacy Policy"
        subtitle={`This policy explains how ${APP_NAME} handles user information.`}
      />
      <p className="mx-auto mt-4 w-fit rounded-[10px] border border-brand-100 bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
        Last updated: {LAST_UPDATED}
      </p>

      <div className="mt-8 space-y-6">
        {SECTIONS.map(({ heading, body }) => (
          <Section key={heading} heading={heading}>
            <p className="text-[15px] leading-7 text-ink/75">{body}</p>
          </Section>
        ))}

        <Section heading="Contact Information">
          <p className="text-[15px] leading-7 text-ink/75">
            If you have questions or concerns about this Privacy Policy, you may
            contact the developer at:
          </p>
          <div className="my-3 h-px bg-brand-100" />
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-[15px] font-bold text-brand hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </Section>
      </div>
    </section>
  );
}
