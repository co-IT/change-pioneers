import { component$ } from "@builder.io/qwik";
import {
  HeadingSegmentAccent,
  HeadingSegmentWhite,
} from "../../heading-segment";
import { MenuIcon } from "../../icons/menu-icon";
import type { HeaderLandingPageProps } from "./header-landing-page.props";

export default component$((props: HeaderLandingPageProps) => {
  return (
    <header
      class="bg-cover bg-no-repeat bg-right-top py-16"
      style={`background-image: linear-gradient(0deg, rgba(2, 2, 52, 0.6), rgba(2, 2, 52, 0.6)), url("${props.backgroundImage.source}");`}
    >
      <div class="container mx-auto grid grid-rows-2 place-content-center text-center space-y-32">
        <section class="flex justify-between h-fit">
          <img
            width="173"
            height="69"
            src="/img/logo.svg"
            alt="co-IT.eu orange Logo - Inspire to Change"
          />

          <div class="flex flex-row gap-x-4 my-auto cursor-pointer hover:opacity-75">
            <MenuIcon />
            <span class="text-2xl text-white font-bold leading-7 my-auto">
              Menu
            </span>
          </div>
        </section>
        <section class="flex flex-col space-y-10 pb-16">
          <h1 class="break-words font-bold text-2xl md:text-6xl">
            {props.headingSegments.map((headingSegment) => (
              <>
                {headingSegment.type === "white" ? (
                  <HeadingSegmentWhite text={headingSegment.text} />
                ) : (
                  <HeadingSegmentAccent text={headingSegment.text} />
                )}
                &nbsp;
              </>
            ))}
          </h1>

          <div class=" bg-secondary md:bg-opacity-0">
            <p class="text-lg leading-10 mx-auto max-w-3xl text-white font-semibold  tracking-wider md:text-xl md:leading-10 md:[text-shadow:0_4px_8px_rgba(0,0,0,0.8)]">
              {props.teaser}
            </p>
          </div>
        </section>
      </div>
    </header>
  );
});
