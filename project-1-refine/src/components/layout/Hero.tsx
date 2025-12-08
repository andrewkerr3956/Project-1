import Image from "next/image";

export default function Hero() {
    return (
        <div id="hero" className="h-120 overflow-hidden w-full text-blue flex relative">
            <Image
                alt=""
                src={'/images/TGA_HERO.png'}
                width={1440}
                height={900}
                objectFit="cover"
                className="absolute z-1 top-0 left-0 w-full h-full"
            />
            <div className="absolute z-2 top-[0] left-[0] w-full h-full">
                <div className="flex-1 flex flex-col gap-24 justify-center relative">
                    <div className="flex flex-col">
                        <h1 className="font-bold text-4xl">Welcome to Gamer Grove!</h1>
                        <p className="font-semibold text-xl">Your one-stop shop for everything gaming!</p>
                    </div>
                    <div>
                        <button className="bg-purple-400 rounded min-w-28 max-w-48 px-4 py-2">
                            Call to action {"->"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}