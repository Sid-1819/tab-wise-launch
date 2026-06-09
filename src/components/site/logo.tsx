import { LOGO_DARK_SRC, LOGO_LIGHT_SRC } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className, alt = "Tab Wise" }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={cn("inline-block shrink-0", className)}>
      <img
        src={LOGO_LIGHT_SRC}
        alt=""
        aria-hidden
        className="block h-full w-full object-contain dark:hidden"
      />
      <img
        src={LOGO_DARK_SRC}
        alt=""
        aria-hidden
        className="hidden h-full w-full object-contain dark:block"
      />
    </span>
  );
}
