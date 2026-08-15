import type { Metadata } from "next";
import Link from "next/link";
import { formatPostDate, getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Xiaoliang Qi",
  description: "Essays and notes by Xiaoliang Qi.",
};

export default function Home() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <main className="site-shell">
      <header className="masthead">
        <Link href="/" className="wordmark" aria-label="Xiaoliang Qi home">
          Xiaoliang Qi
        </Link>
        <nav className="top-nav" aria-label="Primary navigation">
          <a href="https://github.com/XiaoliangQi">GitHub</a>
          <a href="https://github.com/XiaoliangQi/blog/discussions">
            Discussions
          </a>
        </nav>
      </header>

      <section className="intro">
        <p className="kicker">Notebook</p>
        <h1>Essays for the second half of an idea.</h1>
        <p>
          Long-form notes on research, systems, agency, and the small frictions
          that turn into useful thoughts.
        </p>
      </section>

      {featured ? (
        <section className="featured-post" aria-labelledby="featured-heading">
          <p className="section-label">Latest</p>
          <h2 id="featured-heading">
            <Link href={`/posts/${featured.slug}`}>{featured.title}</Link>
          </h2>
          <p className="post-summary">{featured.summary}</p>
          <div className="post-meta">
            <time dateTime={featured.date}>{formatPostDate(featured.date)}</time>
            <span>{featured.readingTime}</span>
          </div>
        </section>
      ) : null}

      <section className="post-index" aria-labelledby="post-index-heading">
        <h2 id="post-index-heading">All writing</h2>
        <div className="post-list">
          {rest.map((post) => (
            <article key={post.slug} className="post-row">
              <div>
                <h3>
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.summary}</p>
              </div>
              <div className="post-meta post-row-meta">
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                <span>{post.readingTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
