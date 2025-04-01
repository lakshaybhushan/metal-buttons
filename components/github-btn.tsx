import Link from "next/link";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";

export function GithubBtn() {
  return (
    <div className="absolute top-0 right-0 m-4">
      <Link
        href="https://github.com/lakshaybhushan/metal-buttons"
        className="github-btn"
      >
        <Button className="rounded-md">
          <FaGithub className="md:mr-2" />
          <span className="hidden md:block">GitHub</span>
        </Button>
      </Link>
    </div>
  );
}
