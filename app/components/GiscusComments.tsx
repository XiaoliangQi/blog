"use client";

import { useEffect, useRef } from "react";

type GiscusCommentsProps = {
  postSlug: string;
};

const giscusConfig = {
  repo: "XiaoliangQi/blog",
  repoId: "R_kgDOT5DAww",
  category: "General",
  categoryId: "DIC_kwDOT5DAw84DDa_u",
};

export function GiscusComments({ postSlug }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", giscusConfig.repo);
    script.setAttribute("data-repo-id", giscusConfig.repoId);
    script.setAttribute("data-category", giscusConfig.category);
    script.setAttribute("data-category-id", giscusConfig.categoryId);
    script.setAttribute("data-mapping", "specific");
    script.setAttribute("data-term", `post:${postSlug}`);
    script.setAttribute("data-strict", "1");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "top");
    script.setAttribute("data-theme", "preferred_color_scheme");
    script.setAttribute("data-lang", "en");
    script.setAttribute("data-loading", "lazy");

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [postSlug]);

  return (
    <aside className="comments-panel" aria-labelledby="comments-title">
      <h2 className="comments-title" id="comments-title">
        Comments
      </h2>
      <div className="giscus-frame" ref={containerRef} />
    </aside>
  );
}
