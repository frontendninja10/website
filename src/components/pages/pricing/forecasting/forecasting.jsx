import Container from 'components/shared/container';
import Link from 'components/shared/link';

import ArrowIcon from './images/arrow.inline.svg';
import lines from './images/lines.svg';

const buttons = [
  {
    text: 'Estimate your bill',
    link: '#estimates',
  },
  {
    text: 'View billing docs',
    link: '/docs/billing',
  },
];

const Forecasting = () => (
  <section className="forecasting safe-paddings pt-[200px] 2xl:pt-36 md:pt-24 ">
    <Container size="medium">
      <div className="mx-auto flex max-w-[1220px] items-center justify-between md:flex-col md:gap-y-10">
        <div>
          <h2 className="text-[56px] font-medium leading-none tracking-tighter lg:text-5xl md:text-4xl [&_span]:text-green-45">
            Forecasting is <span>easy</span>
          </h2>
          <p className="mt-4 max-w-[464px] text-lg font-light leading-snug md:max-w-none md:text-base">
            Refer to our billing docs to explore detailed pricing metrics or swiftly estimate your
            costs through our intuitive survey.
          </p>
          <div className="mt-9 flex gap-x-4 xs:flex-col xs:items-baseline xs:gap-y-2">
            {buttons.map(({ text, link }) => (
              <Link
                className="group flex items-center rounded-[50px] bg-gray-new-10 py-2.5 pl-4 pr-2.5 leading-tight tracking-extra-tight transition-colors duration-200 hover:bg-gray-new-20"
                to={link}
                key={text}
              >
                <span>{text}</span>
                <ArrowIcon className="ml-6 text-gray-new-70 transition-colors duration-200 group-hover:text-white sm:ml-3" />
              </Link>
            ))}
          </div>
        </div>
        <p className="text-bg-clipped max-w-[252px] bg-[linear-gradient(119deg,#C9CBCF_0%,rgba(201,203,207,0.40)100%)] text-right text-xl font-light leading-snug lg:max-w-[200px] lg:text-lg md:max-w-none md:self-start md:text-left">
          Solutions for every user, from starter to advanced PostgreSQL needs
        </p>
      </div>
    </Container>
    <Container className="mt-[72px] md:mt-14" size="medium">
      <img
        className="mx-auto h-auto w-full max-w-[1220px]"
        src={lines}
        alt=""
        loading="lazy"
        width={1220}
        height={66}
        aria-hidden
      />
    </Container>
  </section>
);

export default Forecasting;
