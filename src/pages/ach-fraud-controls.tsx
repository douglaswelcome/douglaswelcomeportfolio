import Layout from "@/layouts/project";
import Contact from "@/components/contact/contact";
import ProjectHero from "@/components/project_hero/project_hero";
import ProjectHeroImg from "@/components/project_hero_img/project_hero_img"
import Testimonial from "@/components/testimonial_card/testimonial_card";



export default function Test() {
  return (
    <Layout>
      <ProjectHero title="ACH Fraud Controls" 
          description="Empowering business owners with simple tools to block unauthorized ACH transactions and protect their accounts." 
          ctaHref="https://support.bluevine.com/s/article/How-do-I-manage-my-ACH-debit-controls#:~:text=Once%20configured%2C%20Bluevine%20business%20bank,avoid%20declined%20payments%20or%20disputes." />
      <ProjectHeroImg 
      src="/screenshots/achfraud_accounts.png"
      alt="Screenshot of ACH Fraud Controls">
      </ProjectHeroImg>
      
      <Testimonial
        imageSrc="/headshots/william_levinson.jpeg"
        name="William Levinson"
        jobTitle="Product at Bluevine"
        quote="Douglas is an exceptional product designer whose work consistently exemplifies a deep commitment to customer-centric design. I wholeheartedly recommend Douglas to any design team looking to their team to the next level."
      />
      <Contact />
    </Layout>
  );
}
