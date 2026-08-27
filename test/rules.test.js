const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const rulesPath = path.join(__dirname, "..", "rules", "block-rules.json");
const rules = JSON.parse(fs.readFileSync(rulesPath, "utf8"));

test("rules include betting website blocks", () => {
  const filters = rules.map((rule) => rule.condition.urlFilter);

  assert(filters.includes("||bet365.com^"));
  assert(filters.includes("||betfair.com^"));
  assert(filters.includes("||sportingbet.com^"));
});

test("rules include ad domain blocks", () => {
  const filters = rules.map((rule) => rule.condition.urlFilter);

  assert(filters.includes("||doubleclick.net^"));
  assert(filters.includes("||googlesyndication.com^"));
  assert(filters.includes("||taboola.com^"));
});
