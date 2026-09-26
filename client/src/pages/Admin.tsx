import { useEffect, useState } from "react";
import { FiLogOut, FiRefreshCw, FiSearch } from "react-icons/fi";
import AdminLogin from "../components/AdminLogin";
import SubmissionCard, { type Submission } from "../components/SubmissionCard";
import Button from "../components/Button";
import FormError from "../components/FormError";
import { request } from "../lib/api";
import { wrap, headingMd, inputCls } from "../lib/ui";

type TabKey = "contacts" | "bookings" | "applications" | "subscribers";

type Submissions = Record<TabKey, Submission[]>;

const tabs: { key: TabKey; label: string }[] = [
  { key: "contacts", label: "Role briefs" },
  { key: "bookings", label: "Call bookings" },
  { key: "applications", label: "Applications" },
  { key: "subscribers", label: "Subscribers" },
];

const TOKEN_KEY = "sira-admin-token";

function readToken() {
  try {
    return sessionStorage.getItem(TOKEN_KEY) ?? "";
  } catch {
    return "";
  }
}

function saveToken(token: string) {
  try {
    if (token) sessionStorage.setItem(TOKEN_KEY, token);
    else sessionStorage.removeItem(TOKEN_KEY);
  } catch {
    return;
  }
}

function matchesSearch(item: Submission, search: string) {
  return Object.values(item).join(" ").toLowerCase().includes(search.toLowerCase());
}

export default function Admin() {
  const [token, setToken] = useState(readToken);
  const [data, setData] = useState<Submissions | null>(null);
  const [tab, setTab] = useState<TabKey>("contacts");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function login(newToken: string) {
    saveToken(newToken);
    setToken(newToken);
  }

  function logout() {
    saveToken("");
    setToken("");
    setData(null);
  }

  async function loadSubmissions() {
    setIsLoading(true);
    setError("");
    const result = await request<Partial<Submissions>>("/admin/submissions", { token });
    setIsLoading(false);

    if (result.ok) {
      setData({
        contacts: result.contacts ?? [],
        bookings: result.bookings ?? [],
        applications: result.applications ?? [],
        subscribers: result.subscribers ?? [],
      });
    } else if (result.status === 401) {
      logout();
    } else {
      setError(result.message);
    }
  }

  async function deleteItem(item: Submission) {
    if (!window.confirm(`Delete the entry from ${item.name || item.email}? This cannot be undone.`)) return;

    const result = await request(`/admin/${tab}/${item._id}`, { method: "DELETE", token });

    if (result.ok && data) {
      setData({ ...data, [tab]: data[tab].filter((entry) => entry._id !== item._id) });
    } else {
      setError(result.message);
    }
  }

  useEffect(() => {
    if (token) loadSubmissions();
  }, [token]);

  const visibleItems = (data?.[tab] ?? []).filter((item) => matchesSearch(item, search));

  return (
    <div className={`${wrap} min-h-[70vh] pb-24 pt-[clamp(120px,14vw,170px)]`}>
      <title>Admin · SIRA HR</title>
      <meta name="robots" content="noindex" />

      {!token ? (
        <AdminLogin onLogin={login} />
      ) : (
        <>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[13px] font-bold uppercase tracking-[0.22em] text-teal">Admin</p>
              <h1 className={`${headingMd} mt-2`}>Submissions</h1>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button variant="ghost" onClick={loadSubmissions} loading={isLoading}>
                {!isLoading && <FiRefreshCw className="h-4 w-4" />}
                Refresh
              </Button>
              <Button variant="danger" onClick={logout}>
                <FiLogOut className="h-4 w-4" />
                Log out
              </Button>
            </div>
          </div>

          <div role="tablist" className="mb-5 flex flex-wrap gap-2.5">
            {tabs.map(({ key, label }) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={tab === key}
                onClick={() => setTab(key)}
                className={`inline-flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-semibold transition duration-300 ${tab === key ? "border-pine bg-pine text-surface" : "border-line bg-surface text-ink-soft hover:border-pine"}`}
              >
                {label}
                <span className={`rounded-full px-2 text-[12px] ${tab === key ? "bg-surface/20" : "bg-line-soft"}`}>
                  {data ? data[key].length : "…"}
                </span>
              </button>
            ))}
          </div>

          <label className="relative mb-6 block max-w-100">
            <span className="sr-only">Search submissions</span>
            <FiSearch className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-faint" />
            <input
              type="search"
              placeholder="Search by name, email, company…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className={`${inputCls} pl-11`}
            />
          </label>

          {error && <FormError>{error}</FormError>}

          {data && visibleItems.length === 0 && (
            <p className="rounded-brand border border-dashed border-line bg-surface p-10 text-center text-ink-soft">
              {search ? "Nothing matches your search." : "No submissions here yet."}
            </p>
          )}

          <div className="grid gap-4">
            {visibleItems.map((item) => (
              <SubmissionCard key={item._id} item={item} onDelete={() => deleteItem(item)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
