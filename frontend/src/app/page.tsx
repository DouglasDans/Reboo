import LandingPageLayout from "@/components/layout/LandingPageLayout";
import LandingBanner from "@/components/pages/landingPage/banner";
import LandingLinksContainer from "@/components/pages/landingPage/linksContainer";
import LandingResourcesContainer from "@/components/pages/landingPage/resourcesContainer";

export default function Home() {
  return (
    <LandingPageLayout>
      <LandingBanner />
      <LandingResourcesContainer />
      <LandingLinksContainer />
    </LandingPageLayout>
  )
}
