import { mkdirSync, writeFileSync } from "node:fs";

// The phone's last words at 1%: it dies mid-sentence, mid-secret.
const LINE =
  "I remember all 214 of your passwords, including your banking app's. It starts with\u2014";

// The gate requires 1-199 characters; fail loudly instead of shipping an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 199) {
  throw new Error(`entry is ${[...LINE].length} characters, must be 1-199`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
