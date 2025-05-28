import Link from "next/link";

export function Header() {
  return (
    <header className="mb-12">
      <h1 className="text-3xl font-bold mb-2">eats.abhin.dev</h1>
      <p className="text-muted-foreground mb-4">
        A project by{" "}
        <Link
          href="https://www.abhin.dev/"
          target="_blank"
          className="underline underline-offset-2"
        >
          Abhin Rustagi
        </Link>
        . A collection of places I have eaten at, and want to eat at - with
        notes & reviews.
      </p>
    </header>
  );
}
