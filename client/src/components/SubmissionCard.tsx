import { FiMail, FiTrash2 } from "react-icons/fi";

export type Submission = {
  _id: string;
  createdAt: string;
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  service?: string;
  message?: string;
  date?: string;
  time?: string;
  jobTitle?: string;
  link?: string;
};

type Props = {
  item: Submission;
  onDelete: () => void;
};

const details: { key: keyof Submission; label: string }[] = [
  { key: "jobTitle", label: "Role" },
  { key: "company", label: "Company" },
  { key: "service", label: "Service" },
  { key: "phone", label: "Phone" },
  { key: "date", label: "Preferred date" },
  { key: "time", label: "Preferred time" },
  { key: "link", label: "Link" },
];

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-GB", { dateStyle: "medium", timeStyle: "short" });
}

export default function SubmissionCard({ item, onDelete }: Props) {
  const shownDetails = details.filter((detail) => item[detail.key]);

  return (
    <article className="rounded-brand border border-line-soft bg-surface p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-[20px] text-ink">{item.name || item.email}</h3>
          <a href={`mailto:${item.email}`} className="inline-flex items-center gap-1.5 text-[14px] font-medium text-pine hover:underline">
            <FiMail className="h-3.5 w-3.5" />
            {item.email}
          </a>
        </div>
        <span className="text-[13px] text-ink-faint">{formatDate(item.createdAt)}</span>
      </div>

      {shownDetails.length > 0 && (
        <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-[14px] max-[520px]:grid-cols-1">
          {shownDetails.map(({ key, label }) => (
            <div key={key}>
              <dt className="text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-faint">{label}</dt>
              <dd className="break-words text-ink-soft">
                {key === "link" ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-pine hover:underline">
                    {item.link}
                  </a>
                ) : (
                  item[key]
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}

      {item.message && <p className="mt-4 whitespace-pre-line rounded-xl bg-ground px-4 py-3 text-[14.5px] text-ink-soft">{item.message}</p>}

      <button
        type="button"
        onClick={onDelete}
        className="mt-4 inline-flex cursor-pointer items-center gap-1.5 text-[13px] font-semibold text-danger hover:underline"
      >
        <FiTrash2 className="h-3.5 w-3.5" />
        Delete
      </button>
    </article>
  );
}
