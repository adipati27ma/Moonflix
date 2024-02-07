import React from "react";
import { Link } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Button from "@/Components/Button";

const Index = ({ auth }) => {
  return (
    <CustomAuthenticatedLayout auth={auth}>
      <Link href={route("admin.dashboard.movie.create")}>
        <Button type="button" className="w-40 mb-8">
          Insert New Movie
        </Button>
      </Link>
    </CustomAuthenticatedLayout>
  );
};

export default Index;
