import logoDark from "@/public/tw_dark-removebg-preview.png";
import logoLight from "@/public/tw_light-removebg-preview.png";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className, alt = "Tab Wise" }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={cn("inline-block shrink-0", className)}>
      <img
        src={logoLight}
        alt=""
        aria-hidden
        className="block h-full w-full object-contain dark:hidden"
      />
      <img
        src={logoDark}
        alt=""
        aria-hidden
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}
