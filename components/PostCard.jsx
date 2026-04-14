import Link from "next/link";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function PostCard({ post }) {
  return (
    <article className="post-card">
      {post.featuredImage?.node?.sourceUrl && (
        <img
          className="post-image"
          src={post.featuredImage.node.sourceUrl}
          alt={post.title}
        />
      )}

      <div className="post-body">
        <h3>{post.title}</h3>

        <div
          className="post-excerpt"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        <div className="post-meta">
          <div className="post-author">
            {post.author?.node?.avatar?.url && (
              <img
                className="post-author-avatar"
                src={post.author.node.avatar.url}
                alt={post.author.node.name}
              />
            )}
            <span>{post.author?.node?.name || "Admin"}</span>
          </div>

          <span>{formatDate(post.date)}</span>

          <Link href={`/posts/${post.slug}`}>Read More</Link>
        </div>
      </div>
    </article>
  );
}