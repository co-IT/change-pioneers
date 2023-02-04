import { $, component$, useContext } from '@builder.io/qwik';
import { Link, useNavigate } from '@builder.io/qwik-city';
import { NavigationLinkCard } from '../cards';
import {
  BlueMailIcon,
  BlueMapIcon,
  BluePhoneIcon,
  YellowCloseIcon
} from '../icons';
import { WhiteCloseIcon } from '../icons/white-close-icon';
import type { NavigationLink } from './model';
import type { NavigationState } from './navigation.context';
import { NavigationContext } from './navigation.context';

export const Navigation = component$(() => {
  const navigationLinks: NavigationLink[] = [
    {
      heading: 'Lösungen',
      path: '/solutions',
      text: 'Alles aus einer Hand'
    },
    {
      heading: 'Qualität',
      path: '/quality',
      text: 'Auf den Punkt abgestimmt'
    },
    {
      heading: 'Karriere',
      path: '/career',
      text: 'Geprägt durch Menschen'
    },
    {
      heading: 'Über uns',
      path: '/about',
      text: 'Motiviert von Werten'
    }
  ];

  const navigation = useContext<NavigationState>(NavigationContext);
  const navigate = useNavigate();

  const closeMenu = $(() => (navigation.isOpen = false));

  const goto$ = $((link: NavigationLink) => {
    navigation.isOpen = false;
    navigate(link.path);
  });

  return (
    <div class='w-full bg-primary pt-12 lg:pt-16 pb-12 lg:pb-24 fixed top-0 z-40 shadow-xl'>
      <div class='container mx-auto flex flex-col gap-y-14 lg:gap-y-20'>
        <div class='flex justify-between flex-col lg:flex-row'>
          <Link href='/'>
            <img
              src='/img/navigation/logo.svg'
              alt='logo'
              class='w-32 lg:w-44 h-fit mx-auto lg:mx-0'
            />
          </Link>
          <div
            class='flex-row gap-x-2 my-auto cursor-pointer hover:opacity-75 hidden md:flex'
            onClick$={() => closeMenu()}
          >
            <WhiteCloseIcon />
            <div class='text-lg text-white font-bold leading-5 my-auto'>
              Schließen
            </div>
          </div>
        </div>

        <div class='flex flex-col gap-y-14'>
          <div class='grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10 px-7 lg:px-0'>
            {navigationLinks.map((navigationLink, key) => (
              <NavigationLinkCard
                link={navigationLink}
                onLinkClick$={link => goto$(link)}
                key={key}
              />
            ))}
          </div>

          <div class='flex justify-center'>
            <a
              href='/contact'
              class='bg-secondary-900 hover:bg-white hover:text-secondary-900 text-white font-bold text-lg w-fit px-14 py-5 rounded'
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div class='flex lg:hidden flex-row justify-between px-10'>
          <div class='flex flex-row gap-x-5'>
            <a
              href='tel:+49721935163052'
              target='_self'
              class='w-14 h-14 bg-white rounded-full shadow-lg relative'
            >
              <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BluePhoneIcon />
              </div>
            </a>
            <a
              href='mailto:info@co-IT.eu'
              target='_blank'
              class='w-14 h-14 bg-white rounded-full shadow-lg relative'
            >
              <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BlueMailIcon />
              </div>
            </a>
            <a
              href='https://g.page/communicativeIT?share'
              target='_blank'
              class='w-14 h-14 bg-white rounded-full shadow-lg relative'
            >
              <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BlueMapIcon />
              </div>
            </a>
          </div>

          <div
            class='w-14 h-14 bg-white rounded-full shadow-lg relative'
            onClick$={() => closeMenu()}
          >
            <div class='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4'>
              <YellowCloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
