"use client";
import Carousel from "@/app/_components/carosel";
import { useRouter } from 'next/navigation'; // Import 'useRouter' from 'next/navigation'
import Navheader from "@/app/_components/NavHeader";

export default function Home() { // Rename 'home' to 'Home' with an uppercase letter
    const router = useRouter();

    let slides = [
        "/carousel_1.svg",
        "/carousel_2.svg",
        "/carousel_3.svg",
    ];

    const handleClick = () => {
        // Replace '/your-target-route' with the route you want to navigate to
        router.push('/deposit');
    };

    return (
        <main className="bg-background h-screen">
            <Navheader />
            <div className="mx-auto px-64">
                <Carousel slides={slides} />
            </div>
            <button
                onClick={handleClick}
                className="text-2xl p-24  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
                start
            </button>
        </main>
    );
}