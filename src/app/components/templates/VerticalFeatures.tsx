import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '@/Section';
const VerticalFeatures = () => (
  <Section
    title="TimeCraft: Master Your Moments with Targeted Todos"
    description="Craft your success story! TimeCraft transforms your calendar into a productivity powerhouse. Click, create, conquer todos, and earn points to unlock your full potential."
  >
    <VerticalFeatureRow
      title="Calendar Todos for Ultimate Productivity"
      description="Level up your life! ChronoChamp lets you dominate your days by adding todos to your calendar. Accomplish tasks, score points, and become the champion of your own time"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="DayForge: Shape Your Future, One Todo at a Time"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Elevate Your Days with Purposeful To-Dos"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
