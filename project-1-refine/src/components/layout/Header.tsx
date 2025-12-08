import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-32 bg-[#304478ff] flex w-full px-16 gap-[25%] items-center">
            <Image 
                alt="Gamer Grove Logo"
                src={'/images/GGroveNew.png'}
                width={240}
                height={180}
            />
            <nav>
                <ul className="flex gap-12">
                    <li><Link href={'/'} className="nav-item">Home</Link></li>
                    <li><Link href={'/news'} className="nav-item">News</Link></li>
                    <li><Link href={'/reviews'} className="nav-item">Reviews</Link></li>
                    <li><Link href={'/shop'} className="nav-item">Shop</Link></li>
                </ul>
            </nav>
        </header>
    )
} 