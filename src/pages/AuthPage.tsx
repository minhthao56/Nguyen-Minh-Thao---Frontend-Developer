import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import useDefinePage from "../hooks/useDefinePage";
import { apiUser } from "../services/user";
import { FormAuthProps } from "../types/user";
import Loading from "../components/Loading";

export default function AuthPage() {
  const { isLoginPage } = useDefinePage();

  const { mutateAsync, isLoading, isError, error } = useMutation({
    mutationKey: ["AuthPage"],
    mutationFn: isLoginPage ? apiUser.login : apiUser.register,
  });
  const { register, handleSubmit } = useForm<FormAuthProps>();

  const onSubmit = async (data: FormAuthProps) => {
    const resp = await mutateAsync(data);
    localStorage.setItem("token", resp.token);
    window.location.assign("/");
  };

  return (
    <div className="container m-auto pt-10">
      <h1 className="text-center text-2xl mb-10 uppercase">
        {isLoginPage ? `Login` : "Register"}
      </h1>

      {isError && (
        <p className="text-red-800 text-center mb-4">
          {JSON.stringify(error instanceof Error ? error.message : error)}
        </p>
      )}

      {isLoading ? (
        <Loading />
      ) : (
        <form
          className="max-w-screen-md  m-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            placeholder="Your Email"
            type="email"
            className="mb-4"
            {...register("email")}
          />
          <Input
            placeholder="Your Password"
            type="password"
            className="mb-6"
            {...register("password")}
          />
          <PrimaryButton>{isLoginPage ? "Login" : "Register"}</PrimaryButton>
        </form>
      )}
    </div>
  );
}
