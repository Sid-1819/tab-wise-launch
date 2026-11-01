import Image from "next/image";

import { LOGO_DARK_SRC, LOGO_LIGHT_SRC } from "@/lib/constants";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  alt?: string;
};

export function Logo({ className, alt = "Tab Wise" }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={cn("inline-block shrink-0", className)}>
      <Image
        src={LOGO_LIGHT_SRC}
        alt=""
        width={220}
        height={40}
        priority
        aria-hidden
        className="block h-full w-auto object-contain dark:hidden"
      />
      <Image
        src={LOGO_DARK_SRC}
        alt=""
        width={220}
        height={40}
        priority
        aria-hidden
        className="hidden h-full w-auto object-contain dark:block"
      />
    </span>
  );
}
