import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="my-4">
        <Link
          href="https://www.github.com/AbhinRustagi/eats"
          target="_blank"
          className="flex gap-2 items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub /> Github
        </Link>
      </div>
    </footer>
  );
}
