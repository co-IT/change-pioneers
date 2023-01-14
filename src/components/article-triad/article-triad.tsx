import { component$, Slot } from '@builder.io/qwik';

/**
 * Consists of three elements
 * 1. A textbox overlapping...
 * 2. ...An image being overlapped by...
 * 3. ... a coloured border
 *
 * Overlapping is solved using a CSS Grid having 9 columns.
 * The textbox stretches from column 1 to column 4.
 * The image starts at column 4 goes to column 9.
 * The border starts at column 8
 */
export const ArticleTriad = component$(() => {
  return (
    <article class="grid auto-rows-min md:grid-cols-8 md:grid-rows-1">
      <div class="z-20 row-start-3 -translate-y-28 mx-3 pt-10 pb-10 pr-5 pl-5 grid-flow-row md:-translate-y-0 md:row-span-full md:col-start-1 md:col-span-4 md:p-14 shadow-md  self-center bg-white">
        <Slot name="article"></Slot>
      </div>
      <div class="z-10 row-start-1 md:row-span-full md:col-start-4 md:col-span-4">
        <Slot name="image"></Slot>
      </div>
      <div class="z-0 row-start-2 md:row-span-full md:col-start-7 xl:col-start-6 md:self-end md:translate-y-10 h-4 md:w-48 md:h-[32rem] xl:h-[40rem] bg-primary"></div>
    </article>
  );
});
