import Layout from "@/layouts/project";
import Contact from "@/components/contact/contact";
import ProjectHero from "@/components/project_hero/project_hero";
import ProjectHeroImg from "@/components/project_hero_img/project_hero_img"
import Testimonial from "@/components/testimonial_card/testimonial_card";



export default function Test() {
  return (
    <Layout>
      <ProjectHero title="ACH Fraud Controls" description="This is some content about what the hell this project is. Take it all with a grain of salt. Or don't. The choice is yours." />
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
