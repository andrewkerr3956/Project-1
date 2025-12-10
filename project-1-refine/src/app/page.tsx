import Image from "next/image";
import Hero from "../components/layout/Hero";
import NewsHeadlineItem from "../components/news/NewsHeadlineItem";

export default function Home() {
  return (
    <div className="block w-full">
      <section id='hero-section' className="w-full block relative">
        <Hero />
      </section>
      <main className="flex w-full min-h-screen max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h2>Latest News</h2>
          <div>
            <NewsHeadlineItem 
              title="Dee's Nuts 3...Coming Soon!"
              caption="A sequel to the critically acclaimed series, Dee's Nuts, has been confirmed to be in development."
              imageProps={{
                alt: '',
                src: '/images/DN.jpg'
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
