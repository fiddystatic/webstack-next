import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PostsGrid from "@/components/PostsGrid";
import { getPosts } from "@/lib/wordpress";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main>
      <Header />
      <Hero />
      <PostsGrid posts={posts} />
    </main>
  );
}