import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { ContentOverlapLandscape } from '../components/content-overlap/content-overlap-landscape';
import { ContentOverlapPortrait } from '../components/content-overlap/content-overlap-portrait';
import HeadingSegmentAccent from '../components/heading-segment/heading-segment-accent';
import HeadingSegmentSecondary from '../components/heading-segment/heading-segment-secondary';
import { LinkCallToAction } from '../components/link-call-to-action/link-call-to-action';

export default component$(() => {
  return (
    <div class="container mx-auto flex flex-col space-y-32">
      <ContentOverlapPortrait
        image={{
          source: '/img/landing-page/developers-tablet.avif',
          alternateText: '2 Developers checking an App on a tablet'
        }}
      >
        <section q:slot="article" class="flex flex-col space-y-4">
          <h2>
            <HeadingSegmentSecondary text="Denken Sie auch in" />
            &nbsp;
            <HeadingSegmentAccent text="ganzheitlichen Lösungen?" />
          </h2>
          <p class="leading-7">
            Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege
            und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist es
            Veränderungen zu etwas Positivem zu machen.
          </p>
          <LinkCallToAction href="/">Mehr erfahren</LinkCallToAction>
        </section>
      </ContentOverlapPortrait>

      <ContentOverlapLandscape
        image={{
          source: '/img/landing-page/cooking-session.avif',
          alternateText: 'Our team cooking a delicious meal'
        }}
      >
        <section q:slot="article" class="flex flex-col space-y-4">
          <h2>
            <HeadingSegmentSecondary text="Machen" />
            &nbsp;
            <HeadingSegmentAccent text="Menschen" />
            &nbsp;
            <HeadingSegmentSecondary text="für Sie auch den" />
            &nbsp;
            <HeadingSegmentAccent text="Unterschied?" />
          </h2>
          <p class="leading-7">
            Dann haben wir für Sie echte Game Changer in unseren Reihen.
            Motiviert durch den Fachkräftemangel, rekrutieren wir mit eigenen
            HR-Spezialisten und qualitätsgetriebenem Auswahlprozess unsere
            Talente. Dank unserer Werteorientierten Unternehmenskultur und
            unserer Team-zentrierten Lösungsmentalität halten und entwickeln wir
            unsere Mitarbeiter.
          </p>
          <LinkCallToAction href="/">Mehr erfahren</LinkCallToAction>
        </section>
      </ContentOverlapLandscape>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'co-IT - Inspire to Change',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description'
    }
  ],
  frontmatter: {
    header: {
      type: 'landing-page',
      backgroundImage: {
        source: '/img/landing-page/header.avif',
        alt: 'Two men writing on a flip chart'
      },
      headingSegments: [
        { type: 'white', text: 'Sie wollen' },
        { type: 'accent', text: 'Herausforderungen als Chancen' },
        { type: 'white', text: 'nutzen?' }
      ],
      teaser:
        'Dann bringen wir Ihre Ideen auf die Straße, ebenen Ihnen neue Wege und schaffen gemeinsam nachhaltige Werte. Unsere Leidenschaft ist es Veränderungen zu etwas Positivem zu machen.'
    }
  }
};
