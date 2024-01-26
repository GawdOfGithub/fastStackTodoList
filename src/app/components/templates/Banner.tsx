import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '@/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Enter the world of master development seekers."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
