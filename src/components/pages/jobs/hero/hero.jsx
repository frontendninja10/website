import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import Container from 'components/shared/container';

const Hero = () => (
  <section className="safe-paddings bg-black pt-40 text-white xl:pt-36 lg:pt-12 md:pt-6">
    <Container size="md">
      <h1 className="t-5xl text-center font-bold">Become a part of our team </h1>
      <p className="t-lg mx-auto mt-8 max-w-[860px] text-center !leading-normal 2xl:mt-7 xl:mt-6">
        Zenith is a serverless implementation of PostgreSQL. It’s an auto-scaling, on-demand
        database as a service for modern applications, making it a credible open-source alternative
        to Amazon Aurora.
      </p>
      <div className="-mt-16 translate-y-32 lg:-mt-12 lg:translate-y-24 md:-mt-8 md:flex md:translate-y-16 md:justify-center">
        <StaticImage
          className="rounded-md md:min-w-[600px]"
          src="./images/hero-illustration.jpg"
          alt=""
          imgClassName="rounded-md"
          loading="eager"
          aria-hidden
        />
      </div>
    </Container>
  </section>
);

export default Hero;
