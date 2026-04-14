import Link from "next/link";
import { getPostBySlug } from "../../../lib/wordpress";

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return <div className="container single-post">Post not found.</div>;
  }

  return (
    <main className="single-post-page">
      <div className="container single-post">
        <Link href="/" className="back-link">
          ← Back to Home
        </Link>

        {post.featuredImage?.node?.sourceUrl && (
          <img
            className="single-post-image"
            src={post.featuredImage.node.sourceUrl}
            alt={post.title}
          />
        )}

        <h1>{post.title}</h1>

        <div className="single-post-meta" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {post.author?.node?.avatar?.url && (<img src={post.author.node.avatar.url} alt={post.author.node.name} style={{width: "40px", height: "40px", borderRadius: "50%"}}/>)}
            <span>{post.author?.node?.name || "Admin"}</span>
            <span>{formatDate(post.date)}</span>
        </div>

        <div
          className="single-post-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </main>
  );
}