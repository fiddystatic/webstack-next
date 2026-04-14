import PostCard from "./PostCard";

export default function PostsGrid({ posts }) {
  return (
    <section className="posts-section" id="posts">
      <div className="container">
        <h2 className="section-title">Latest Posts</h2>

        <div className="posts-grid">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}