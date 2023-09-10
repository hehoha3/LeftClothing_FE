import HomeTrending from "@/components/elements/HomeTrending";
import UnderAbout from "@/components/elements/UnderAbout";
import BannerCollection from "@/components/ui/BannerCollection";
import BannerContents from "@/components/shared/BannerContents";
import Hero from "@/components/shared/Hero";

const page = () => {
  return (
    <>
      <Hero />
      <BannerContents />
      <div className="px-4">
        <HomeTrending />
      </div>
      <section className="mb-5">
        <BannerCollection />
      </section>
      <section className="mb-5">
        <UnderAbout />
      </section>
    </>
  );
};

export default page;
