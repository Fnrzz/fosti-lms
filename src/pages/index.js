import About from "@/components/elements/landingPage/about";
import Header from "@/components/elements/landingPage/header";
import LearningPath from "@/components/elements/landingPage/learningPath";
import News from "@/components/elements/landingPage/news";

export default function Home() {
  return (
    <main>
      <section className="container pt-5">
        <Header />
      </section>
      <section className="bg-body-secondary mt-5">
        <News />
      </section>
      <section className="mt-5">
        <About />
      </section>
      <section className="mt-5">
        <LearningPath />
      </section>
    </main>
  );
}
