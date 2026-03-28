/** Escape HTML special characters to prevent injection in email templates */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

/** Truncate a string to a max length */
export function limit(str: string, max: number): string {
  return typeof str === "string" ? str.slice(0, max) : "";
}
