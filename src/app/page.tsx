import Hero from "@/components/Hero";
// import WhyChoosePrrayasha from "@/components/WhyChoosePrrayasha";
import Categories from "@/components/Categories";
import ProductSection from "@/components/ProductSection";
import FavouriteCollections from "@/components/FavouriteCollections";
// import CategoryGrid from "@/components/CategoryGrid";
// import BrandStyles from "@/components/BrandStyles";
import Testimonials from "@/components/Testimonials";
import KnowPrrayasha from "@/components/KnowPrrayasha";

export default function Home() {
  return (
    <main className="site-main">
      <Hero />
      {/* <WhyChoosePrrayasha /> */}
      <Categories />
      <ProductSection />
      <FavouriteCollections />
      {/* <CategoryGrid /> */}
      {/* <BrandStyles /> */}
      <Testimonials />
      <KnowPrrayasha />
    </main>
  );
}
