import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { GiscusComments } from "@/app/components/GiscusComments";
import { formatPostDate, getAllPosts, getPost } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.summary,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="article-shell">
      <header className="masthead">
        <Link href="/" className="wordmark" aria-label="Xiaoliang Qi home">
          Xiaoliang Qi
        </Link>
        <nav className="top-nav" aria-label="Primary navigation">
          <Link href="/">Writing</Link>
          <a href="https://github.com/XiaoliangQi/blog">GitHub</a>
          <a href="https://github.com/XiaoliangQi/blog/discussions">
            Discussions
          </a>
        </nav>
      </header>

      <article>
        <header className="article-header">
          <Link className="back-link" href="/">
            Back to writing
          </Link>
          <p className="kicker">Essay</p>
          <h1 className="post-title">{post.title}</h1>
          <p className="article-summary">{post.summary}</p>
          <div className="post-meta">
            <time dateTime={post.date}>{formatPostDate(post.date)}</time>
            <span>{post.readingTime}</span>
          </div>
        </header>

        <div className="article-layout">
          <div className="post-body">
            <ReactMarkdown
              rehypePlugins={[rehypeKatex]}
              remarkPlugins={[remarkGfm, remarkMath]}
            >
              {post.content}
            </ReactMarkdown>
          </div>
          <GiscusComments postSlug={post.slug} />
        </div>
      </article>
    </main>
  );
}
