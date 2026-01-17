
import { Moon } from "lucide-react";
import Link from "next/link";

export default function Header(){
    return(<header className="px-40 py-10 ">
        <nav className="flex justify-between items-center">

            {/* logo */}
        <Link href="/" className="text-2xl font-bold">AK</Link>

        {/* Nav Links */}
        <ul className="flex items-center space-x-7">
            <li> <Link href="/">About</Link></li>
           
            <li><Link href="/">Experience</Link></li>
            <li><Link href="/">Projects</Link></li>
            <li> <Link href="/">Education</Link></li>
             <li>  <Link href="/">Skills</Link></li>
              <li> <Link href="/">Contact</Link></li>
           
        </ul>

        {/* Theme Toggle*/}
        <button aria-label="Toggle dark mode">
            <Moon />
        </button>
        </nav>
    </header>)
}