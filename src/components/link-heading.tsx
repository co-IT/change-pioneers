import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const LinkedHeading = component$(
  (props: Omit<QwikIntrinsicElements['a'], 'class'>) => {
    return (
      <>
        {' '}
        <div class='mb-2 h-1 w-10 bg-primary'></div>
        <a {...props} class='block'>
          <h2 class='text-secondary relative inline-block text-4xl font-bold hover:before:absolute hover:before:left-[-1em] hover:before:text-secondary-800 hover:before:content-["#"]'>
            <Slot />
          </h2>
        </a>
      </>
    );
  }
);
