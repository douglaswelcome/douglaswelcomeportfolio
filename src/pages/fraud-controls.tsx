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
import ProjectMeta from "@/components/project_meta/project_meta";

export default function Test() {
  return (
    <Layout>
      <div>
        <ProjectHero
          title="Fraud Controls for SMB Banking"
          description="Empowering business owners with simple tools to block unauthorized ACH transactions and protect their accounts."
          ctaHref="https://support.bluevine.com/s/article/How-do-I-manage-my-ACH-debit-controls#:~:text=Once%20configured%2C%20Bluevine%20business%20bank,avoid%20declined%20payments%20or%20disputes."
        />
        <ProjectHeroImg
          src="/screenshots/achfraud_accounts.png"
          alt="Screenshot of ACH Fraud Controls"
        ></ProjectHeroImg>
      </div>
      <div className="caseSection">

<ProjectMeta
  time="2024, 10 Weeks"
  team="Product Manager, Product Designer, and R&D Tech Lead"
  role="Researcher, designer, strategy and vision"
/>
</div>
      <div className="caseSection">
        <SimpleImg
          image={[
            { src: "/ach-fraud/desktop1.jpg", alt: "desktop1" },
            { src: "/ach-fraud/mobile1.jpg", alt: "mobile1" },
          ]}
          variant="twoLarge"
        />
      </div>
 


      <div className="caseSection">
        <SectionHeader
          headline="Managing ACH Fraud"
          subheadline="Bluevine is financial technology company building better banking solutions for growing businesses by providing the attention, funding and financial tools they deserve. With the aim is to offer industry-leading fintech platform with robust security, we were tasked with launching a suite of ACH fraud controls tools to empower business owners to maintain tighter control over who can draw funds from their accounts. This project had four primary phases:"
        />
        <div className="gridWrapper mt-6">

          <WideListItem
            headline="Identify Problem and Opportunity"
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
            headline="Refine, Ship and Evaluate"
            count="4."
            subheadline="Refine the fraud control experience, collaborate with R&D to develop, validate, and ship feature suite, and evaluate the impact of the feature."
            showBorder={false}
          />
        </div>
      </div>

      <div className="caseSection">
        <SectionHeader
          headline="Problem and Opportunity"
          subheadline="We identified three primary pain points for both Bluevine's business and customers when dealing with unauthorized ACH transactions."
        />
        <div className="gridWrapper mt-6">
          <div className="col-start-1 col-span-12 flex rowToColumn gap-8">
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
            className=""
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
          headline="Research and Interview"
          subheadline="We took an initial inventory of our assumed user needs and explored various ways of structuring these within the platform. We then interviewed small business owners to gain deeper insights and test if our proposed feature set aligned with their expectations."
        />
        <div className="gridWrapper pb-8 pt-8">
          <SimpleImg
            image={{ src: "/ach-fraud/feature_set1.jpg", alt: "inventory of features" }}
            caption="Collecting and outlining possible feature set and architecture based on our assumptions for user expectations and accessibility."
            variant="oneSmall"
          />
        </div>
        <div className="gridWrapper pb-8 pt-8">

          <SimpleImg
            image={[
              { src: "/ach-fraud/amy.jpg", alt: "Amy, a business owner" },
              { src: "/ach-fraud/ken.jpg", alt: "Ken, a business owner" },
            ]}
            caption="Interviewing small business owners. Amy, owner of a local pizzeria and Ken, owner of a music store and school."
            variant="twoSmall"
          />

        </div>
      </div>

      <div className="caseSection">
        <SectionHeader
          headline="Explore and Iterate"
          subheadline="I iterated on various design approaches that prioritized simplicity, and clarity while allowing granular control. I also ensured the feature was easy to discover without disrupting the flow of more frequent or critical user actions."
        />
        <div className="gridWrapper pt-8 ">
          <SimpleImg
            image={[
              { src: "/ach-fraud/iterate1.jpg", alt: "Iterate1" },
              { src: "/ach-fraud/iterate2.jpg", alt: "iterate2" },
            ]}
            variant="twoLarge"
          />
        </div>
        <div className="gridWrapper pb-8 pt-8 ">
          <SimpleImg
            image={[
              { src: "/ach-fraud/iterate3.jpg", alt: "Iterate3" },
              { src: "/ach-fraud/iterate4.jpg", alt: "iterate4" },
            ]}
            variant="twoLarge"
          />

        </div>
      </div>

      <div className="caseSection">
        <SectionHeader
          headline="Refine, Ship and Evaluate"
          subheadline="After refining the designs for the fraud controls feature, we shipped the following designs publicly to all Bluevine customers:"
        />
        <div className="gridWrapper pt-8 ">
        <SimpleImg
            image={
              { src: "/ach-fraud/desktop3.jpg", alt: "desktop3" }
            }
            variant="oneLarge"
          />
        </div>
        <div className="gridWrapper pb-8 pt-8 ">
          <SimpleImg
            image={
              { src: "/ach-fraud/desktop2.jpg", alt: "desktop2" }
            }
            variant="oneLarge"
          />
        </div>
        <div className="gridWrapper pb-8 pt-8 ">
          <SimpleImg
            image={
              { src: "/ach-fraud/mobile2.jpg", alt: "mobile2" }
            }
            variant="oneLarge"
          />
        </div>
      </div>



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
