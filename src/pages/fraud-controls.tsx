import Layout from "@/layouts/project";
import Contact from "@/components/contact/contact";
import ProjectHero from "@/components/project_hero/project_hero";
import ProjectHeroImg from "@/components/project_hero_img/project_hero_img";
import Testimonial from "@/components/testimonial_card/testimonial_card";
import SectionHeader from "@/components/section_header/section_header";
import SimpleCard from "@/components/simple_card/simple_card";
import WideListItem from "@/components/wide_list_item/wide_list_item";
import StatementCard from "@/components/statement_card/statement_card";
import styles from "@/components/statement_card/statement_card.module.scss";
import SimpleImg from "@/components/simple_img/simple_img";
export default function Test() {
  return (
    <Layout>
      <ProjectHero
        title="Fraud Controls for SMB Banking"
        description="Empowering business owners with simple tools to block unauthorized ACH transactions and protect their accounts."
        ctaHref="https://support.bluevine.com/s/article/How-do-I-manage-my-ACH-debit-controls#:~:text=Once%20configured%2C%20Bluevine%20business%20bank,avoid%20declined%20payments%20or%20disputes."
      />
      <ProjectHeroImg
        src="/screenshots/achfraud_accounts.png"
        alt="Screenshot of ACH Fraud Controls"
      ></ProjectHeroImg>

      <div className="caseSection">
        <SectionHeader
          headline="Managing ACH Fraud"
          subheadline="Bluevine is financial technology company building better banking solutions for growing businesses by providing the attention, funding and financial tools they deserve. With the aim is to offer industry-leading fintech platform with robust security, we were tasked with launching a suite of ACH fraud controls tools to empower business owners to maintain tighter control over who can draw funds from their accounts."
        />
        <div className="gridWrapper mt-6">
          <div className="col-start-2 col-span-10 flex flex-col gap-12">
            <WideListItem
              headline="Identify the Problem and the Opportunity"
              count="1."
              subheadline='Ask ourselves "How might we create ACH debit controls that are dead-simple to use, quick to setup, and provide the level of control and security required by business owners?" '
            />
            <WideListItem
              headline="Research and Interview"
              count="2."
              subheadline="Compare competitors' experience and interview business owners to understand their day-to-day experience with ACH debits, fraud protection and resolution."
            />
            <WideListItem
              headline="Explore and Iterate"
              count="3."
              subheadline="Iterate on possible design approaches and test these with stakeholders and customers."
            />
            <WideListItem
              headline="Ship and Evaluate"
              count="4."
              subheadline="Refine the fraud control experience, collaborate with R&D to develop, validate, and ship feature suite, and evaluate the impact of the feature."
              showBorder={false}
            />
          </div>
        </div>
      </div>

      <div className="caseSection">
        <SectionHeader
          headline="The Problem and Opportunity"
          subheadline="We identified three primary pain points for both Bluevine's business and customers when dealing with unauthorized ACH transactions."
        />
        <div className="gridWrapper mt-6">
          <div className="col-start-2 col-span-10 flex flex-row gap-6">
            <SimpleCard
              className="flex-1"
              count="1."
              headline="Time-consuming Resolutions"
              body="Customer support spent excessive hours manually investigating and resolving potential ACH fraud, hindering efficiency."
            ></SimpleCard>
            <SimpleCard
              className="flex-1"
              count="2."
              headline="Financial Risk"
              body="Unresolved fraudulent transactions led to financial losses for Bluevine, impacting profitability."
            ></SimpleCard>
            <SimpleCard
              className="flex-1"
              count="3."
              headline="Customer Dissatisfaction"
              body="The slow resolution process risked frustrating customers and damaging their trust in Bluevine's security. Additionally, this is a feature offered by many business banking solutions."
            ></SimpleCard>
          </div>
        </div>
        <SectionHeader
          subheadline="With the pain points identified, we outlined the opportunity to solve for through our design of the ACH fraud controls."
        />
        <div className="gridWrapper mt-6">
          <StatementCard
            className="col-start-2 col-span-10"
            body={[
              { text: "How might we create ACH debit controls that are " },
              { text: "dead-simple", className: styles.highlightBg },
              { text: " to use, " },
              { text: "quick", className: styles.highlightBg },
              { text: " to setup, and provide a level of " },
              { text: "control and security", className: styles.highlightBg },
              { text: " required by business owners." },
            ]}
          />
        </div>

      </div>

      <div className="caseSection">
        <SectionHeader
          headline="Research and Interviews"
          subheadline="We took an initial inventory of our assumed user needs and explored various ways of structuring these within the platform. We then interviewed small business owners to gain deeper insights and test if our proposed feature set aligned with their expectations."
        />
        <div className="gridWrapper mt-6">
          <div className="col-start-2 col-span-10 flex flex-row gap-6">
            <SimpleImg
              src="/ach-fraud/feature_set.png"
              alt="Screenshot of ACH Fraud Controls"
              caption="Collecting and outlining possible feature set and architecture based on our assumptions for user expectations and accessibility."
            />
          </div>
        </div>
      </div>

      {/* <Testimonial
        imageSrc="/headshots/william_levinson.jpeg"
        name="William Levinson"
        jobTitle="Product at Bluevine"
        quote="Douglas is an exceptional product designer whose work consistently exemplifies a deep commitment to customer-centric design. I wholeheartedly recommend Douglas to any design team looking to their team to the next level."
      /> */}
      <Contact />
    </Layout>
  );
}
