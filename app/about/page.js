import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="info-page">
      <div className="container">
        <div className="info-card">
          <h1>About This Project</h1>

          <p>
            This project demonstrates a headless CMS setup using WordPress,
            WPGraphQL, and Next.js.
          </p>

          <p>
            WordPress is used as the content management system, while the
            Next.js frontend fetches post data via GraphQL and renders a modern,
            responsive user interface.
          </p>

          <p>
            The implementation includes a homepage, a dynamic blog grid powered
            by WordPress content, and single post pages that display the full
            article content.
          </p>

          <div className="info-actions">
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}