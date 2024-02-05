import { useEffect } from "react";
import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";
import React from "react";

const Register = () => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <>
      <Head title="Sign Up" />
      <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
          <img
            src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]"
            alt=""
          />
        </div>
        <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
          <div>
            <img src="/images/moonton-white.svg" alt="" />
            <div className="my-[70px]">
              <div className="font-semibold text-[26px] mb-3">Sign Up</div>
              <p className="text-base text-[#767676] leading-7">
                Explore our new movies and get <br />
                the better insight for your life
              </p>
            </div>
            <form className="w-[370px]" onSubmit={submit}>
              <div className="flex flex-col gap-6">
                <div>
                  <InputLabel forInput="name" value="Full Name" />
                  <TextInput
                    type="text"
                    name="name"
                    value={data.name}
                    placeholder="Your name..."
                    isFocused={true}
                    onChange={(e) => setData("name", e.target.value)}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                  <InputLabel forInput="email" value="Email Address" />
                  <TextInput
                    type="email"
                    name="email"
                    value={data.email}
                    placeholder="Your Email Address"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div>
                  <InputLabel forInput="password" value="Password" />
                  <TextInput
                    type="password"
                    name="password"
                    value={data.password}
                    placeholder="Your Password"
                    isFocused={true}
                    onChange={(e) => setData("password", e.target.value)}
                    required
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div>
                <div>
                  <InputLabel
                    forInput="password confirmation"
                    value="Confirm Password"
                  />
                  <TextInput
                    type="password"
                    name="password confirmation"
                    value={data.password_confirmation}
                    isFocused={true}
                    onChange={(e) =>
                      setData("password_confirmation", e.target.value)
                    }
                    required
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div>
              </div>
              <div className="grid space-y-[14px] mt-[30px]">
                <Button isLoading={processing} type="submit" variant="primary">
                  <span className="text-base font-semibold">Sign Up</span>
                </Button>
                <Link href={route("login")}>
                  <Button
                    type="button"
                    variant="light-outline"
                    isLoading={processing}
                  >
                    <span className="text-base font-semibold">
                      Sign In to My Account
                    </span>
                  </Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
