import AuthLayout from "@/layout/AuthLayout";
import SignupForm from "@/sections/Auth/SignupForm";


const Signup = () => {

  return (
    <AuthLayout>
      <section className="container-120 h-full">
        <section className="py-10 grid gap-10">
          <SignupForm />
        </section>
      </section>
    </AuthLayout>
  );
};

export default Signup;
