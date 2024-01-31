import React from "react";
import { Head } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Flickity from "react-flickity-component";
import FeaturedMovie from "@/Components/FeaturedMovie";
import BrowseMovie from "@/Components/BrowseMovie";

const Dashboard = () => {
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
            <CustomAuthenticatedLayout>
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
                        {[1, 2, 3, 4].map((index) => {
                            return (
                                <FeaturedMovie
                                    key={`flickity-featured-${index}`}
                                    slug="the-batman-in-love"
                                    name={`The Batman in Love ${index}`}
                                    category={`Action - Horror`}
                                    thumbnail={"/images/featured-1.png"}
                                    rating={index + 1}
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
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => {
                            return <BrowseMovie key={index} />;
                        })}
                    </Flickity>
                </div>
                {/* ./Browse */}
            </CustomAuthenticatedLayout>
        </>
    );
};

export default Dashboard;
