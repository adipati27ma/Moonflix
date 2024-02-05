import React from "react";
import { Head } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

const Dashboard = ({ auth, featuredMovies, movies }) => {
  const flickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: ">1",
  };

  return (
    <>
      <CustomAuthenticatedLayout auth={auth}>
        <Head title="Dashboard">
          <link
            rel="stylesheet"
            href="https://unpkg.com/flickity@2/dist/flickity.min.css"
          />
        </Head>
        {/* Featured */}
        <div>
          <div className="font-semibold text-[22px] text-black mb-4">
            Featured Movies
          </div>
          <Flickity className="gap-[30px]" options={flickityOptions}>
            {/* <!-- Movie Thumbnail --> */}
            {featuredMovies.map((movie, index) => {
              return (
                <FeaturedMovie
                  key={movie.id}
                  slug={movie.slug}
                  name={movie.name}
                  category={movie.category}
                  thumbnail={movie.thumbnail}
                  rating={movie.rating}
                />
              );
            })}
          </Flickity>
        </div>
        {/* ./Featured */}

        {/* Browse */}
        <div>
          <div className="font-semibold text-[22px] text-black mb-4">
            Browse
          </div>
          <Flickity className="gap-[30px]" options={flickityOptions}>
            {movies.map((movie, index) => {
              return (
                <MovieCard
                  key={movie.id}
                  slug={movie.slug}
                  name={movie.name}
                  category={movie.category}
                  thumbnail={movie.thumbnail}
                  rating={movie.rating}
                />
              );
            })}
          </Flickity>
        </div>
        {/* ./Browse */}
      </CustomAuthenticatedLayout>
    </>
  );
};

export default Dashboard;
