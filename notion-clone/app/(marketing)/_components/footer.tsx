import { Button } from "@/components/ui/button"

import { Logo } from "./logo"
import Link from "next/link"

export const Footer = () => {
  return (
    <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <Logo />
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
        <Button variant="ghost" size="sm">
          <Link href="https://github.com/Akhilesh-pujar">
           GitHub
          </Link>
         
        </Button>
        <Button variant="ghost" size="sm">
          <Link href="https://www.linkedin.com/in/akhileshpujar/">
          Linkdin
          
          </Link>
          
        </Button>
      </div>
    </div>
  )
}