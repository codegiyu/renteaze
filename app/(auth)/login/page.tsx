import AuthLayout from "@/layout/AuthLayout";
import SigninForm from "@/sections/Auth/SigninForm";

const Login = () => {

  return (
    <AuthLayout>
      <section className="container-120 h-full">
        <section className="py-10 grid gap-10">
          <SigninForm />
        </section>
      </section>
    </AuthLayout>
  );
};

export default Login;
