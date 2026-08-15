import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  readingTime: string;
  content: string;
};

const postsDirectory = path.join(process.cwd(), "content/posts");
const postDateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "long",
  timeZone: "UTC",
});

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

function readString(value: unknown, fallback = "") {
  return typeof value === "string" ? value : fallback;
}

function estimateReadingTime(content: string) {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 220));
  return `${minutes} min read`;
}

function parsePost(filename: string): Post {
  const filePath = path.join(postsDirectory, filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(raw);
  const slug = slugFromFilename(filename);
  const title = readString(data.title, slug);
  const date = readString(data.date, new Date().toISOString().slice(0, 10));
  const summary = readString(data.summary, content.slice(0, 160));

  return {
    slug,
    title,
    date,
    summary,
    content: content.trim(),
    readingTime: estimateReadingTime(content),
  };
}

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map(parsePost)
    .sort((first, second) => second.date.localeCompare(first.date));
}

export function getPost(slug: string) {
  return getAllPosts().find((post) => post.slug === slug);
}

export function formatPostDate(value: string) {
  const date = new Date(`${value}T00:00:00.000Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return postDateFormatter.format(date);
}
