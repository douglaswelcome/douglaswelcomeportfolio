import Layout from "@/layouts/project";
import Contact from "@/components/contact/contact";
import ProjectHero from "@/components/project_hero/project_hero";

export default function Test() {
  return (
    <Layout>
      <ProjectHero title="Debit and Credit Cards for Employees" description="This is some content about what the hell this project is. Take it all with a grain of salt. Or don't. The choice is yours." />
      <Contact />
    </Layout>
  );
}
