import React from "react";
import { Link } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

const Index = ({ auth, flashMessage, movies }) => {
  return (
    <CustomAuthenticatedLayout auth={auth}>
      <Link href={route("admin.dashboard.movie.create")}>
        <Button type="button" className="w-40 mb-8">
          Insert New Movie
        </Button>
      </Link>
      {flashMessage?.message && <FlashMessage message={flashMessage.message} />}

      <table className="table-fixed w-full text-center">
        <thead>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Rating</th>
          <th colSpan={2}>Action</th>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <img
                  src={`/storage/${movie.thumbnail}`}
                  className="w-32 rounded-md"
                />
                {/* docs: utk image perlu jalankan "php artisan storage:link" agar file dalam folder storage bisa terbaca */}
              </td>
              <td>{movie.name}</td>
              <td>{movie.category}</td>
              <td>{movie.rating.toFixed(1)}</td>
              <td>
                <Button type="button" variant="warning">
                  Edit
                </Button>
              </td>
              <td>
                <Button type="button" variant="danger">
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </CustomAuthenticatedLayout>
  );
};

export default Index;
