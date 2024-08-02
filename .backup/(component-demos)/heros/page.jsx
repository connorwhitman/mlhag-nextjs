import React from "react";

import HeroAgency from "@/components/hero/HeroAgency";
import HeroDark from "@/components/hero/HeroDark";
import HeroDefault from "@/components/hero/HeroDefault";
import HeroFreelancer from "@/components/hero/HeroFreelancer";
import HeroModern from "@/components/hero/HeroModern";

const HeroDemos = () => {
  return (
    <>
    <HeroAgency />
    <HeroDark />
    <HeroDefault />
    <HeroFreelancer />
    <HeroModern />
    </>
  );
};

export default HeroDemos;