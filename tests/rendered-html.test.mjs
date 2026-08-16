import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
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
    new URL("../out/posts/draft_v1/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /katex/);
  assert.match(html, /katex-display/);
  assert.match(html, /katex-mathml/);
  assert.match(html, /<annotation encoding="application\/x-tex">p_n<\/annotation>/);
  assert.match(html, /<annotation encoding="application\/x-tex">L = \\sum_i/);
});

test("copies post figures into the static export", async () => {
  await access(new URL("../out/posts/draft_v1/fig1.png", import.meta.url));
  await access(new URL("../out/posts/draft_v1/fig2.png", import.meta.url));
});
