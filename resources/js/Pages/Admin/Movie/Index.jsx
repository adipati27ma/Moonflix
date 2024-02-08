import React from "react";
import { Link } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({ auth, flashMessage }) => {
  return (
    <CustomAuthenticatedLayout auth={auth}>
      <Link href={route("admin.dashboard.movie.create")}>
        <Button type="button" className="w-40 mb-8">
          Insert New Movie
        </Button>
      </Link>
      {flashMessage?.message && <FlashMessage message={flashMessage.message} />}
    </CustomAuthenticatedLayout>
  );
};

export default Index;
