import Layout from "@/layouts/home";
import HomeHero from "@/components/home_hero/home_hero";
import SectionHeader from "@/components/section_header/section_header";
import CaseCard from "@/components/case_card/case_card";
import Contact from "@/components/contact/contact";
import { BluevineLogo } from "@/components/logos/bluevine";
// import { MekanoidLogo } from "@/components/logos/mekanoid";
import { TestimonialCarousel } from "@/components/carousel/carousel";

export default function Test() {
  return (
    <Layout>
      <HomeHero />
      <SectionHeader tag="Work" headline="Selected Cases" />
      <CaseCard
        headline="Fraud Controls for SMB Banking"
        tag="Case Study"
        subheadline="ACH fraud controls for small businesses include transaction limits and dual authorization to prevent unauthorized transfers."
        LogoComponent={BluevineLogo}
        ctaCopy="View Case Study"
        cardHref="fraud-controls"
        cardImg={{
          imgsrc: "/screenshots/achfraud_accounts.png",
          imgalt: "Screenshot of Fraud Controls for SMB Banking",
          imgWidth: 1440,
          imgHeight: 1005,
        }}
      />

      {/* <CaseCard
        headline="Mekanoid Project"
        tag="Case Study"
        subheadline="Example Subheadline"
        LogoComponent={MekanoidLogo}
        ctaCopy="View Case Study"
        cardHref="https://www.slapkirk.com"
        cardImg={{
          imgsrc: "/screenshots/achfraud_accounts.png",
          imgalt: "Screenshot of Fraud Controls for SMB Banking",
          imgWidth: 1440,
          imgHeight: 1005,
        }}
      />

      <CaseCard
        headline="Debit Cards for Employees"
        tag="Case Study"
        subheadline="Example Subheadline"
        LogoComponent={BluevineLogo}
        ctaCopy="View Case Study"
        cardHref="debit-cards-for-employees"
        cardImg={{
          imgsrc: "/screenshots/achfraud_accounts.png",
          imgalt: "Screenshot of Fraud Controls for SMB Banking",
          imgWidth: 1440,
          imgHeight: 1005,
        }}
      /> */}

      <SectionHeader tag="Recommendations" headline="Colleague and Client Reviews" />
      <TestimonialCarousel />
      <Contact />
    </Layout>
  );
}
