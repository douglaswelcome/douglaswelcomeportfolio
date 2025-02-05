import Layout from "@/layouts/project";
import Contact from "@/components/contact/contact";
import ProjectHero from "@/components/project_hero/project_hero";
import Testimonial from "@/components/testimonial_card/testimonial_card";

export default function Test() {
  return (
    <Layout>
      <ProjectHero title="Debit and Credit Cards for Employees" description="This is some content about what the hell this project is. Take it all with a grain of salt. Or don't. The choice is yours." />
      <Testimonial
        imageSrc="/headshots/nick_chapin.jpeg"
        name="Nick Chapin"
        jobTitle="Product at Bluevine"
        quote="Douglas is an exceptional product designer whose work consistently exemplifies a deep commitment to customer-centric design. I wholeheartedly recommend Douglas to any Design team looking to their team to the next level."
      />
      <Contact />
    </Layout>
  );
}
