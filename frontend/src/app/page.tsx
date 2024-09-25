import LandingPageLayout from "@/components/layout/LandingPageLayout";
import LandingBanner from "@/components/pages/landingPage/banner";
import LandingResourcesContainer from "@/components/pages/landingPage/resourcesContainer";

export default function Home() {
  return (
    <LandingPageLayout>
      <LandingBanner />
      <LandingResourcesContainer />
    </LandingPageLayout>
  )
}
