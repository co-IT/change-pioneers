import { component$ } from "@builder.io/qwik";
import { NavigationCard } from "../cards";
import { WhiteCloseIcon } from "../icons/white-close-icon";

export const Navigation = component$(() => {
  const NavigationCardItems = [
    {
      title: "Lösungen",
      link: "/solutions",
      text: "Alles aus einer Hand"
    },
    {
      title: "Qualität",
      link: "/quality",
      text: "Auf den Punkt abgestimmt"
    },
    {
      title: "Karriere",
      link: "/career",
      text: "Geprägt durch Menschen"
    },
    {
      title: "Über uns",
      link: "/about",
      text: "Motiviert von Werten"
    }
  ];

  return (
    <div class="w-full bg-primary pt-16 pb-24 absolute top-0 z-10 shadow-xl">
      <div class="container mx-auto flex flex-col gap-y-20">
        <div class="flex justify-between">
          <img src="/img/navigation/logo.svg" alt="logo" />
          <div class="flex flex-row gap-x-2 my-auto cursor-pointer hover:opacity-75">
            <WhiteCloseIcon />
            <div class="text-lg text-white font-bold leading-5 my-auto">
              Schließen
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-14">
          <div class="flex flex-row gap-x-10">
            {NavigationCardItems.map((cardItem, key) => (
              <NavigationCard title={cardItem.title} link={cardItem.link} text={cardItem.text} key={key} />
            ))}
          </div>

          <div class="flex justify-center">
            <a href="/contact" class="bg-secondary hover:opacity-75 text-white font-bold text-lg w-fit px-14 py-[18px] rounded">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </div>
  )
});