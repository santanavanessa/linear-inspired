import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";
import { Button, Highlight } from "@/components/button";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";

export const HomepageHero = () => {
    return (
        <Hero>
          <Button
            className="animate-fade-in opacity-0 translate-y-[-1rem]"
            href="/"
            variant="secondary"
            size="small"
          >
            <span>Linear 2022 Release – Built for scale</span>{" "}
            <Highlight>→</Highlight>
          </Button>
          <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem]">
            Linear is a better way <br /> to build products
          </HeroTitle>
          <HeroSubTitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Meet the new standard for modern software development.
            <br className="hidden md:block" /> Streamline issues, sprints, and
            product roadmaps.
          </HeroSubTitle>
          <Button
            className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
            href="/"
            variant="primary"
            size="large"
          >
            <span>Get Started</span>
            <Highlight>
              <ChevronIcon/>
            </Highlight>
          </Button>
          <HeroImage/>
        </Hero>
    )
}