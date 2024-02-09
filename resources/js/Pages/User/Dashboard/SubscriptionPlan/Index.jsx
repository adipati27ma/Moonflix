import React from "react";
import SubscriptionCard from "@/Components/SubscriptionCard";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import { Head, router } from "@inertiajs/react";

const SubscriptionPlan = ({ auth, subscriptionPlans, env }) => {
  const selectSubscription = (id) => {
    router.post(
      // param ketiga dari route.post() adalah Partial Visit (mirip Axios)
      route("user.dashboard.subscriptionPlan.userSubscribe", {
        subscriptionPlan: id,
      }),
      {},
      {
        only: ["userSubscription"],
        onSuccess: ({ props }) => {
          onSnapMidtrans(props.userSubscription);
        },
      }
    );
  };

  const onSnapMidtrans = (userSubscription) => {
    snap.pay(userSubscription.snap_token, {
      // Optional
      onSuccess: function (result) {
        console.log({ result });
        router.get(route("user.dashboard.index"));
      },
      // Optional
      onPending: function (result) {
        console.log({ result });
      },
      // Optional
      onError: function (result) {
        console.log({ result });
      },
    });
  };

  return (
    <CustomAuthenticatedLayout auth={auth}>
      <Head title="Subscription Plan">
        <script
          src="https://app.sandbox.midtrans.com/snap/snap.js"
          data-client-key={env.MIDTRANS_CLIENTKEY}
        ></script>
      </Head>
      {/* <!-- START: Content --> */}
      <div className="py-20 flex flex-col items-center">
        <div className="text-black font-semibold text-[26px] mb-3">
          Pricing for Everyone
        </div>
        <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
          Invest your little money to get a whole new experiences from movies.
        </p>

        {/* <!-- Pricing Card --> */}
        <div className="flex justify-center gap-10 mt-[70px]">
          {subscriptionPlans.map((plan) => (
            <SubscriptionCard
              key={plan.id}
              subsName={plan.name}
              price={plan.price}
              durationInMonth={plan.active_period_in_months}
              features={JSON.parse(plan.features)}
              isPremium={plan.name === "Premium"}
              onSelectSubscription={() => selectSubscription(plan.id)}
            />
          ))}

          {/* <SubscriptionCard
            subsName="Premium"
            price={699000}
            durationInMonth={6}
            features={["Feature 1X", "Feature 2X", "Feature 3X"]}
            isPremium
          /> */}
        </div>
        {/* <!-- /Pricing Card --> */}
      </div>
    </CustomAuthenticatedLayout>
  );
};

export default SubscriptionPlan;
