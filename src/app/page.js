"use client";
import Image from "next/image";
import Link from "next/link";
import ProductContainer from "../../components/frontPageProductsShow/productContainer";
import ProductLayout from "../../layouts/ProductLayout";
import highlightFirst from "../../public/assets/images/highlightFirst2.jpg";
import highlighSecound from "../../public/assets/images/highlighSecound.jpg";
import highlightThrid from "../../public/assets/images/highlightThrid.jpg";
export default function Home() {
  const highlights = [
    {
      id: 1,
      image: highlightFirst,
      title: "PROGRAM",
      date: "2023-10-01",
      description: "The 9Tseven program is a reflection of constant movement — a space where monthly events and collaborations spark connection. A shared experience that brings us together.",
    },
    {
      id: 2,
      image: highlighSecound,
      title: "9TSEVEN X NEW BALANCE",
      date: "2023-10-15",
      description: "A collaboration rooted in purpose. Together, we celebrate movement, community, and a shared vision for mindful progress.",
    },
    {
      id: 3,
      image: highlightThrid,
      title: "MANIFESTO",
      date: "2023-11-05",
      description: "Our manifesto is a mindset—built on gratitude, growth, and connection. It guides how we move, live, and uplift each other.",
    },
  ];
  return (
    <>
      <section className=" h-[50vh] md:h-[99vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/Better2.webp" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
      </section>
      <section className="grid md:col-start-2 md:col-end-3 col-start-1 col-end-4 md:mt-30 md:mb-15">
        <ProductLayout>
          <ProductContainer
            slice1="5"
            slice2="6"
            slice3="7"
            slice4="8"
            images="sittingGlasses"
            header="GRATITUDE"
            paragraph="Gratitude means noticing and appreciating the good things in life. It can boost your mood and help you feel more connected. With Social Run, it’s easier to feel grateful — whether it's for a shared smile, a team effort, or just showing up together. Running with others brings small moments that mean a lot."
          />
        </ProductLayout>
      </section>
      <section className=" h-[70vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative md:mt-10">
        <div className="flex">
          <Image src="/assets/images/doublePicSammyGray.webp" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover hover:saturate-50 " />
          <Image src="/assets/images/doublePicSammyGray2.webp" alt="hero" width={1000} height={1000} className="md:w-full h-full  overflow-hidden  object-cover  saturate-0 hover:saturate-100 hidden md:block" />
          <Link href="/productPage" className="absolute bottom-10 left-6 sm:left-15 border-main_white border-2 text-main_white p-3 text-ParagraphSize hover:bg-alternativ_black">
            SHOP PERFROMANCE
          </Link>
        </div>
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 md:mt-30 md:mb-15">
        <ProductLayout>
          <ProductContainer
            slice1="4"
            slice2="5"
            slice3="7"
            slice4="8"
            variant="reverseContainer"
            images="legSammy"
            header="DIVERSITY"
            paragraph="Creating a space for diversity means welcoming different people, voices, and stories. It makes us stronger and more open-minded.
With Social Run, everyone is invited — no matter your background, pace, or experience. It’s a place where we move together and learn from each other."
          />
        </ProductLayout>
      </section>
      <section className="h-[50vh] md:h-[100vh] col-start-1 col-end-4 grid overflow-hidden  relative">
        <Image src="/assets/images/communitySammy.webp" alt="hero" fill className="md:w-full h-full  overflow-hidden  object-cover " />
        <div className="absolute bottom-10 md:bottom-20 left-6 sm:left-15">
          <div className="mb-8 hidden sm:block">
            <h2 className="mb-2">COMMUNITY</h2>
            <p className="w-[20rem]">
              It’s feeling connected — through shared steps, small conversations, or simply being together. With Social Run, community grows naturally — in the high-fives, the group rhythm, or just knowing someone’s beside you. Running together turns
              simple moments into something meaningful.
            </p>
          </div>
          <Link href="/communityPage" className=" border-main_white border-2 text-main_white p-3 text-ParagraphSize hover:bg-alternativ_black ">
            JOIN OUR COMMUNITY
          </Link>
        </div>
      </section>
      <section className="grid lg:col-start-2 lg:col-end-3 col-start-1 col-end-4 md:mt-30 md:mb-15">
        <ProductLayout>
          <ProductContainer
            slice1="8"
            slice2="9"
            slice3="6"
            slice4="7"
            images="sammySideways"
            header="WELCOME ALL FEELINGS"
            paragraph="Welcome all feelings means it's okay to feel happy, tired, nervous, or excited — all emotions are valid. You don't have to hide how you feel.
With Social Run, you can show up just as you are. It's a space where you're met with support, no matter your mood. We run together — with all our feelings."
          />
        </ProductLayout>
      </section>

      <section className="col-start-1 col-end-4 grid sm:mb-30">
        <div className="grid col-start-2 col-end-3 mt-30 mb-4 p-4 md:p-0">
          <div className="*:text-HeaderSizeSmall *:text-main_black *:font-bold mb-2 sm:mb-6 ">
            <h2>HIGHLIGHTS</h2>
          </div>
          <div className="flex flex-row max-w-[100vw] overflow-x-scroll snap-x snap-mandatory ">
            {highlights.map((highlight) => (
              <div className="w-fit pr-4 snap-start" key={highlight.id}>
                <Image className="object-cover mb-4" src={highlight.image} alt={highlight.title} width={400} height={200} />
                <div className="w-90">
                  <h2 className=" text-HeaderSizeSmall text-main_black">{highlight.title}</h2>
                  <p className=" text-ParagraphSize text-alternativ_black">{highlight.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
