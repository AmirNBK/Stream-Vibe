import Header from "@/components/header/header";
import MovieSection from "@/components/movies-section";

export default function Home() {
  return (
    <div className="">
      <Header />
      <MovieSection
        title="Explore our wide variety of categories"
        description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
      />
    </div>
  );
}
