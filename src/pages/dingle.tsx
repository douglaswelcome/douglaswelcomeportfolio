import Layout from "@/layouts/home"
import HomeHero from "@/components/home_hero/home_hero"
import SectionHeader from "@/components/section_header/section_header"
import CaseCard from "@/components/case_card/case_card"

export default function Test() {
  return (
    <Layout>
      <HomeHero />
      <SectionHeader />
      <CaseCard 
        headline="Fraud Controls for SMB Banking" 
        tag="Case Study"
        subheadline="Studying the effects of climate change and major world collisions and catastrophes with a flair for imagination."
        />
    </Layout>


  );
}
