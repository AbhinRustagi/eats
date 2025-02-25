import Link from "next/link";

export function Header() {
  return (
    <header className="mb-8">
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
        . A collection of places I have eaten at, and want to eat at - with
        notes & reviews.
      </p>
    </header>
  );
}
