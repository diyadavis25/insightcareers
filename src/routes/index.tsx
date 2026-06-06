import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Consultant } from "@/components/site/Consultant";
import { Opportunities } from "@/components/site/Opportunities";

import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Insight Career Service — Global Career Opportunities" },
      { name: "description", content: "Discovery is the Journey, Insight is the Destination. Trusted overseas job consultancy in Irinjalakuda offering career guidance, interview prep and global placement." },
      { property: "og:title", content: "Insight Career Service Center" },
      { property: "og:description", content: "Your Trusted Partner For Global Career Opportunities." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <About />
        <Services />
        <Process />
        <Consultant />
        
        <Opportunities />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <Toaster position="top-center" richColors />
    </div>
  );
}
