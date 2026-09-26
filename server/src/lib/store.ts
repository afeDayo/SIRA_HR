import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

/**
 * A tiny append-only JSON store. Every submission (contact brief, booking,
 * application, newsletter signup) is persisted to its own file under
 * `server/data/*.json`. This keeps the demo fully functional with zero
 * external dependencies — swap this module for a real database (Postgres,
 * Mongo, etc.) when you're ready to go to production.
 */
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "../../data");

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readCollection<T>(name: string): Promise<T[]> {
  await ensureDir();
  const file = path.join(DATA_DIR, `${name}.json`);
  try {
    const raw = await fs.readFile(file, "utf8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

export type StoredRecord<T> = T & { id: string; createdAt: string };

/** Append a record to a collection and return it (with id + timestamp). */
export async function saveRecord<T extends object>(
  collection: string,
  data: T
): Promise<StoredRecord<T>> {
  await ensureDir();
  const file = path.join(DATA_DIR, `${collection}.json`);
  const existing = await readCollection<StoredRecord<T>>(collection);
  const record: StoredRecord<T> = {
    ...data,
    id: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
    createdAt: new Date().toISOString(),
  };
  existing.push(record);
  await fs.writeFile(file, JSON.stringify(existing, null, 2), "utf8");
  return record;
}

export async function countRecords(collection: string): Promise<number> {
  const items = await readCollection(collection);
  return items.length;
}
