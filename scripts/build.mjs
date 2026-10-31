// Dependency-free build: inlines @import chain, writes dist/artemis.css and dist/artemis.min.css
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const inline = (file) =>
  readFileSync(file, "utf8").replace(/@import\s+"([^"]+)";\s*/g, (_, p) =>
    inline(resolve(dirname(file), p)) + "\n");

const minify = (css) =>
  css
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\s+/g, " ")
    .replace(/\s*([{}:;,>])\s*/g, "$1")
    .replace(/;}/g, "}")
    .trim();

const out = inline(resolve("src/index.css"));
mkdirSync("dist", { recursive: true });
writeFileSync("dist/artemis.css", out);
writeFileSync("dist/artemis.min.css", minify(out));
copyFileSync("dist/artemis.css", "docs/artemis.css");
console.log("built dist/artemis.css, dist/artemis.min.css");
