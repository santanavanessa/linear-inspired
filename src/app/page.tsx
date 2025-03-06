import { Clients } from "@/components/clients";
import { Container } from "@/components/container";

import { StarsIllustration } from "@/components/icons/stars";
import { BuildMomentum } from "@/components/sections/build-momentum";
import { EnjoyIssueTracking } from "@/components/sections/enjoy-issue-tracking";
import { HomepageHero } from "@/components/sections/homepage-hero";
import { SetDirection } from "@/components/sections/set-direction";
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool";
import classNames from "classnames";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden md:pb-[25.6rem] pb-[16.4rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
        <div
          className={classNames(
            "z-[-1] mask-radial-faded pointer-events-none relative my-[-12.8rem] h-[60rem] overflow-hidden",
            "before:absolute before:opacity-[0.4] before:inset-0 [--color:#7877C6] before:bg-radial-faded",
            "after:absolute after:bg-background after:top-1/2 after:-left-1/2 after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:h-[142.8%]"
          )}
        >
          <StarsIllustration />
        </div>
      

      <UnlikeAnyTool />
      <EnjoyIssueTracking />
      <BuildMomentum />
      <SetDirection />
    </>
  );
}
