import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-6">
      <header>
        <h1 className="text-3xl font-bold mb-2">Eats</h1>
        <p>
          A project by{" "}
          <Link
            href="https://www.abhin.dev/"
            target="_blank"
            className="underline"
          >
            Abhin Rustagi
          </Link>
          .
        </p>
      </header>
      <main className="">
        <div>{/* filter box */}</div>
        <div>
          {/* grid and list view */}
          {/* list & thumbnails */}
        </div>
      </main>
    </div>
  );
}
