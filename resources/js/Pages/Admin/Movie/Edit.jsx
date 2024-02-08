import React from "react";
import { Head, useForm } from "@inertiajs/react";
import CustomAuthenticatedLayout from "@/Layouts/CustomAuthenticatedLayout/Index";
import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Checkbox from "@/Components/Checkbox";

const Edit = ({ auth, movie }) => {
  const { data, setData, put, processing, errors } = useForm({
    ...movie,
  });

  const onHandleChange = (e) => {
    setData(
      e.target.name,
      e.target.type === "file" ? e.target.files[0] : e.target.value
    );
  };

  const submit = (e) => {
    e.preventDefault();

    if (data.thumbnail === movie.thumbnail) {
      delete data.thumbnail;
    }
    put(route("admin.dashboard.movie.update", movie.id), {
      _method: "PUT",
      ...data,
    });
  };

  return (
    <>
      <CustomAuthenticatedLayout auth={auth}>
        <Head title="Admin: Edit Movie" />
        <div>
          <h1 className="text-xl">Update Movie: {movie.name} </h1>
          <hr className="mb-4" />
          <form onSubmit={submit}>
            <div className="flex flex-col gap-6">
              <div>
                <InputLabel forInput="name" value="Name" />
                <TextInput
                  type="text"
                  name="name"
                  variant="primary-outline"
                  defaultValue={movie.name}
                  onChange={onHandleChange}
                  placeholder="Enter the name of the movie"
                  isError={errors.name}
                />
                <InputError message={errors.name} className="mt-2" />
              </div>
              <div>
                <InputLabel forInput="category" value="Category" />
                <TextInput
                  type="text"
                  name="category"
                  variant="primary-outline"
                  defaultValue={movie.category}
                  onChange={onHandleChange}
                  placeholder="Enter the category"
                  isError={errors.category}
                />
                <InputError message={errors.category} className="mt-2" />
              </div>
              <div>
                <InputLabel forInput="video_url" value="Video URL" />
                <TextInput
                  type="url"
                  name="video_url"
                  variant="primary-outline"
                  defaultValue={movie.video_url}
                  onChange={onHandleChange}
                  placeholder="Enter the video url"
                  isError={errors.video_url}
                />
                <InputError message={errors.video_url} className="mt-2" />
              </div>
              <div>
                <InputLabel forInput="thumbnail" value="Thumbnail" />
                <img
                  src={`/storage/${movie.thumbnail}`}
                  alt=""
                  className="w-40"
                />
                <TextInput
                  type="file"
                  name="thumbnail"
                  variant="primary-outline"
                  // defaultValue={movie.thumbnail}
                  onChange={onHandleChange}
                  placeholder="Insert thumbnail"
                  isError={errors.thumbnail}
                />
                <InputError message={errors.thumbnail} className="mt-2" />
              </div>
              <div>
                <InputLabel forInput="rating" value="Rating" />
                <TextInput
                  type="number"
                  name="rating"
                  variant="primary-outline"
                  defaultValue={movie.rating}
                  onChange={onHandleChange}
                  placeholder="Enter rating of the movie"
                  isError={errors.rating}
                />
                <InputError message={errors.rating} className="mt-2" />
              </div>
              <div className="flex gap-2">
                <Checkbox
                  name="is_featured"
                  onChange={(e) => setData("is_featured", e.target.checked)}
                  className="mt-1"
                  checked={movie.is_featured ? true : false}
                />
                <InputLabel
                  forInput="is_featured"
                  value="Considered as featured movie?"
                />
                <InputError message={errors.isFeatured} className="mt-2" />
              </div>
              <div className="mt-4">
                <Button type="submit" isLoading={processing}>
                  Save
                </Button>
              </div>
            </div>
          </form>
        </div>
      </CustomAuthenticatedLayout>
    </>
  );
};

export default Edit;
