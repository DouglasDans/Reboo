import LandingBanner from "@/containers/landing-page/banner-section";
import LandingLinksContainer from "@/containers/landing-page/links-section";
import LandingResourcesContainer from "@/containers/landing-page/resources-section";
import LandingPageLayout from "@/layout/landing-page-layout";


export default function Home() {
  return (
    <LandingPageLayout>
      <LandingBanner />
      <LandingResourcesContainer />
      <LandingLinksContainer />
    </LandingPageLayout>
  )
}
