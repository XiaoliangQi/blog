import type { Metadata } from "next";
import Link from "next/link";
import { SocialLinks } from "@/app/components/SocialLinks";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Xiaoliang Qi",
  description: "Essays and notes by Xiaoliang Qi.",
};

export default function Home() {
  const posts = getAllPosts();

  return (
    <main className="site-shell">
      <header className="masthead">
        <Link href="/" className="wordmark" aria-label="Xiaoliang Qi home">
          Xiaoliang Qi
        </Link>
        <div className="masthead-actions">
          <nav className="top-nav" aria-label="Primary navigation">
            <Link href="/">Posts</Link>
            <a href="https://github.com/XiaoliangQi/blog/discussions">
              Discussions
            </a>
          </nav>
          <SocialLinks />
        </div>
      </header>

      <section className="home-info">
        <h1>My Dandelion Field</h1>
        <p>
          Records of random thoughts on information, spacetime, AI,
          civilization, and anything else I thought about.
        </p>
      </section>

      <section className="post-index" aria-labelledby="post-index-heading">
        <h2 id="post-index-heading">Posts</h2>
        <div className="post-card-list">
          {posts.map((post) => (
            <article key={post.slug} className="post-card">
              <Link
                className="post-card-link"
                href={`/posts/${post.slug}`}
                aria-label={`Read ${post.title}`}
              >
                <span className="post-card-title">{post.title}</span>
                <span className="post-card-summary">{post.summary}</span>
                <span className="post-card-meta">
                  <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                  <span>{post.readingTime}</span>
                  <span>Xiaoliang Qi</span>
                </span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
