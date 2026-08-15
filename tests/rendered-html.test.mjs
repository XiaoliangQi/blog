import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("builds the blog home page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Xiaoliang Qi<\/title>/i);
  assert.match(html, /Essays for the second half of an idea/);
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
});
