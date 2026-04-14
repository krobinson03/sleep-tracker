/** Single dream journal entry */
export interface DreamEntry {
  id: string;
  /** ISO date string */
  date: string;
  /** User's dream text */
  content: string;
  /** When the entry was created/updated (ISO) */
  updatedAt: string;
}
