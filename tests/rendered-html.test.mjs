import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds the blog home page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Xiaoliang Qi<\/title>/i);
  assert.match(html, /Random Ideas from a Physicist/);
  assert.match(html, /What Is Life\? -- Question Revisited in the AI Era/);
  assert.match(html, /Welcome to the Notebook/);
  assert.match(html, /Working in Public/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("builds an article page with giscus comments", async () => {
  const html = await readFile(
    new URL("../out/posts/welcome-to-the-notebook/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>Welcome to the Notebook \| Xiaoliang Qi<\/title>/i);
  assert.match(html, /The writing should be the loudest thing on the page/);
  assert.match(html, /Comments/);
  assert.match(html, /giscus/);
  assert.ok(
    html.indexOf("The writing should be the loudest thing on the page") <
      html.indexOf("Comments"),
  );
});

test("renders inline and display math with KaTeX", async () => {
  const html = await readFile(
    new URL("../out/posts/what-is-life-ai/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /katex/);
  assert.match(html, /katex-display/);
  assert.match(html, /katex-mathml/);
  assert.match(html, /<annotation encoding="application\/x-tex">Z<\/annotation>/);
  assert.match(html, /<annotation encoding="application\/x-tex">L = \\sum_i/);
});
