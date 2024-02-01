import React from "react";
import SubscriptionCard from "@/Components/SubscriptionCard";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";

const SubscriptionPlan = () => {
    return (
        <CustomAuthenticatedLayout>
            {/* <!-- START: Content --> */}
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    <SubscriptionCard
                        subsName="Basic"
                        price={299000}
                        durationInMonth={3}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    />

                    <SubscriptionCard
                        subsName="Premium"
                        price={699000}
                        durationInMonth={6}
                        features={["Feature 1X", "Feature 2X", "Feature 3X"]}
                        isPremium
                    />
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </CustomAuthenticatedLayout>
    );
};

export default SubscriptionPlan;
