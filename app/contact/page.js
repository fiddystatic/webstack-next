import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="info-page">
      <div className="container">
        <div className="info-card">
          <h1>Contact</h1>

          <p>
            If you would like to reach out regarding this project or discuss an
            opportunity, feel free to connect with me using the details below.
          </p>

          <ul>
            <li>
              <strong>Email:</strong> fidelmudzamba7@gmail.com
            </li>
            <li>
              <strong>GitHub:</strong> https://github.com/fiddystatic/
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              https://www.linkedin.com/in/fidel-mudzamba-74b11215a
            </li>
             <li>
              <strong>Phone:</strong> tel:+263779496008
            </li>
          </ul>

          <div className="info-actions">
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Visit Portfolio
            </a>

            <Link href="/" className="btn-secondary">
              <br></br><br></br>Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}