import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("builds the blog home page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");
  assert.match(html, /<title>Xiaoliang Qi<\/title>/i);
  assert.match(html, /Random Ideas from a Physicist/);
  assert.match(html, /What Is Life\? -- Question Revisited in the AI Era/);
  assert.match(html, /Agentic Publication Protocol/);
  assert.match(html, /The Agentification of Scientific Research/);
  assert.doesNotMatch(html, /Welcome to the Notebook/);
  assert.doesNotMatch(html, /Working in Public/);
  assert.match(html, /post-card/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /https:\/\/x.com\/Xiao_Liang_Qi/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("builds an article page with giscus comments", async () => {
  const html = await readFile(
    new URL("../out/posts/agentic-publication/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<title>Agentic Publication Protocol \| Xiaoliang Qi<\/title>/i);
  assert.match(html, /Instead of publishing papers, we should publish agents/);
  assert.match(html, /Comments/);
  assert.match(html, /giscus/);
  assert.ok(
    html.indexOf("Instead of publishing papers, we should publish agents") <
      html.indexOf("Comments"),
  );
});

test("renders inline and display math with KaTeX", async () => {
  const html = await readFile(
    new URL("../out/posts/what-is-life/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /katex/);
  assert.match(html, /katex-display/);
  assert.match(html, /katex-mathml/);
  assert.match(html, /<annotation encoding="application\/x-tex">p_n<\/annotation>/);
  assert.match(html, /<annotation encoding="application\/x-tex">L = \\sum_i/);
});

test("renders local html anchors for figures and references", async () => {
  const html = await readFile(
    new URL("../out/posts/what-is-life/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /<a id="fig-circuit"><\/a>/);
  assert.match(html, /<a id="ref-schrodinger1944what"><\/a>/);
  assert.doesNotMatch(html, /&lt;a id=&quot;fig-circuit&quot;&gt;/);
  assert.doesNotMatch(html, /&lt;a id=&quot;ref-schrodinger1944what&quot;&gt;/);
});

test("copies post figures into the static export", async () => {
  await access(new URL("../out/posts/what-is-life/fig1.png", import.meta.url));
  await access(new URL("../out/posts/what-is-life/fig2.png", import.meta.url));
  await access(new URL("../out/posts/agentic-publication/APP_repo.png", import.meta.url));
  await access(new URL("../out/posts/agentic-publication/APP_dev.png", import.meta.url));
});
