const socialLinks = [
  {
    href: "https://x.com/Xiao_Liang_Qi",
    label: "X",
    title: "X",
  },
  {
    href: "https://profiles.stanford.edu/xiaoliang-qi",
    label: "Stanford",
    title: "Stanford homepage",
  },
  {
    href: "https://scholar.google.com/citations?hl=en&user=d2jc9KIAAAAJ",
    label: "Scholar",
    title: "Google Scholar",
  },
  {
    href: "https://github.com/XiaoliangQi",
    label: "GitHub",
    title: "GitHub",
  },
];

export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Profile links">
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer me"
          title={link.title}
          aria-label={link.title}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
