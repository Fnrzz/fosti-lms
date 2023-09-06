import Header from "@/components/elements/landingPage/header";
import News from "@/components/elements/landingPage/news";

export default function Home() {
  return (
    <main>
      <section className="container pt-3">
        <Header />
      </section>
      <section className="bg-body-secondary mt-5">
        <News />
      </section>
    </main>
  );
}
