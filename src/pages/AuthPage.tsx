import { useForm } from "react-hook-form";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import useDefinePage from "../hooks/useDefinePage";

interface FormPropsAuth {
  email: string;
  password: string;
}

export default function AuthPage() {
  const { isLoginPage } = useDefinePage();
  const { register, handleSubmit } = useForm<FormPropsAuth>();
  const onSubmit = (data: FormPropsAuth) => console.log(data);
  return (
    <div className="container m-auto pt-10">
      <h1 className="text-center text-2xl mb-10 uppercase">
        {isLoginPage ? `Login` : "Register"}
      </h1>
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
    </div>
  );
}
