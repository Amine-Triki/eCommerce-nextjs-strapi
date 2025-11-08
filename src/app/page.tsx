import Heading from "@/components/Heading";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero/>
      <Heading
        title="La collection distinctive"
        subtitle="Les produits les plus récents et les plus vendus au Tunisie"
      />
    </div>
  );
}
