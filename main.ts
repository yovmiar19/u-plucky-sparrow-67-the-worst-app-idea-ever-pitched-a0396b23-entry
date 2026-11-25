import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My alarm app wakes you up by reading your old texts out loud in your ex's voice.";

function writeEntry(text: string): void {
  if (!text.trim()) {
    throw new Error("entry must not be blank");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

writeEntry(ENTRY);
