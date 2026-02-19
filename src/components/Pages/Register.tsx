import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Input from "../Input";
import InputErrorMessage from "../ui/InputErrorMessage";
import { REGISTER_FORM } from "../../data";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../validation";
import axiosInstance from "../../Api/axios.config";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import type { IErrorResponse } from "../../Interfaces";

type Inputs = { username: string; email: string; password: string };

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(registerSchema) });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setLoading(true);
    try {
      const { status } = await axiosInstance.post("/auth/local/register", data);
      if (status === 200) {
        toast.success("Account created. Redirecting to sign in…", {
          duration: 2500,
        });
        setTimeout(() => navigate("/login", { replace: true }), 1200);
      }
    } catch (err) {
      const e = err as AxiosError<IErrorResponse>;
      const msg = e.response?.data?.error?.message ?? "Registration failed.";
      toast.error(msg, { duration: 4000 });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 selection:bg-imperial-primary selection:text-white">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-imperial-dark/10 overflow-hidden animate-fade-in relative">
        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-imperial-dark via-imperial-primary to-imperial-dark"></div>

        <div className="pt-8 pb-6 text-center">
          <h1 className="text-3xl font-bold text-imperial-dark mb-2 tracking-tight">
            Create Account
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-imperial-dark/10">
          <Link
            to="/login"
            className="flex-1 py-3 text-center font-bold text-imperial-dark hover:bg-imperial-bg/50 transition-colors bg-white"
          >
            Login
          </Link>
          <button className="flex-1 py-3 text-center font-bold text-white bg-linear-to-r from-imperial-dark to-imperial-primary shadow-inner">
            Signup
          </button>
        </div>

        <div className="p-8">
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {REGISTER_FORM.map(({ type, name, validation, placeholder }) => (
              <div key={name}>
                <Input // Using global Input component
                  type={type}
                  placeholder={placeholder}
                  {...register(name as keyof Inputs, { ...validation })}
                  className="py-3"
                />
                {errors[name as keyof Inputs] && (
                  <InputErrorMessage
                    msg={errors[name as keyof Inputs]?.message}
                  />
                )}
              </div>
            ))}

            <Button
              type="submit"
              width="full"
              loading={loading}
              className="mt-4 text-lg bg-linear-to-r from-imperial-dark to-imperial-primary hover:from-imperial-hover hover:to-imperial-primary text-white font-bold py-6 rounded-xl transition-all shadow-lg hover:shadow-imperial-primary/40 transform hover:-translate-y-0.5"
            >
              {loading ? "Creating account…" : "Register"}
            </Button>
          </form>

          <div className="mt-8 text-center text-sm font-medium text-imperial-dark/70">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-imperial-primary hover:text-imperial-hover font-bold hover:underline transition-all"
            >
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
