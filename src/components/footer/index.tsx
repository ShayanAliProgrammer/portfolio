import {
  RiBlueskyFill,
  RiFacebookFill,
  RiGithubFill,
  RiInstagramFill,
  RiThreadsFill,
} from "react-icons/ri";
import ThemeToggler from "../theme-toggler";
import { Button } from "../ui/button";
import Image from "../ui/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-dashed bg-background py-20 text-foreground">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <div className="size-20 overflow-hidden rounded-full border-2">
          <Image
            src="/shayan-4k-2.jpeg"
            className="dark:hidden"
            alt="Shayan"
            width={80}
            height={80}
          />
          <Image
            src="/shayan-4k-2-dark.jpeg"
            alt="Shayan"
            className="hidden dark:inline-block"
            width={80}
            height={80}
          />
        </div>

        <nav className="flex items-center gap-5">
          <Button asChild variant="ghost" size="sm">
            <a href="/">Home</a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="/#skills">Skills</a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="/projects">Projects</a>
          </Button>

          <Button asChild variant="ghost" size="sm">
            <a href="/blog">Blog</a>
          </Button>
        </nav>

        <div className="flex items-center gap-6">
          <Button asChild variant="outline" size="icon">
            <a href="https://github.com/ShayanAliProgrammer" target="_blank">
              <RiGithubFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="https://facebook.com/share/1B4VKZFBkh/">
              <RiFacebookFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiThreadsFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiInstagramFill size={20} />
            </a>
          </Button>

          <Button asChild variant="outline" size="icon">
            <a href="#">
              <RiBlueskyFill size={20} />
            </a>
          </Button>
        </div>

        <ThemeToggler />

        <div className="max-w-xs text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shayan Ali. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
