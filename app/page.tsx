import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import MainLayout from "@/layout/MainLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <MainLayout>
      <main className="">
        <Cta />
        <Footer />
      </main>
    </MainLayout>
  );
}
