import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container nav">
        <div className="logo">Logo</div>

        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <Link className="cta-button" href="/contact">
          Get Started
        </Link>
      </div>
    </header>
  );
}