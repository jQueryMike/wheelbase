import { HeadingSize } from '@components/blocks/Heading';

export const items = [
  {
    id: '941abec1-2510-4237-bc52-5fa7b8efbc1d',
    classes: {
      root: 'border-divider overflow-hidden rounded-lg border',
      toggleButton: 'flex w-full items-center justify-between p-4 hover:bg-body-light/50',
      toggleButtonExpanded: 'border-divider border-b',
      toggleButtonCollapsed: '',
      toggleIconContainer: 'text-accent text-sm transition duration-150',
      toggleIconContainerExpanded: '-rotate-180',
      toggleIconContainerCollapsed: 'rotate-0',
      toggleIcon: 'fa-solid fa-arrow-down',
      contentAreaContainer: 'space-y-4 p-4 @xl:p-5 @3xl:p-6 @5xl:p-8',
      contentAreaContainerExpanded: 'block',
      contentAreaContainerCollapsed: 'hidden',
    },
    heading: {
      id: '77fdd051-cc6a-4956-ba6f-6a479915f3c3',
      name: 'Heading',
      text: 'Lorem ipsum dolor sit amet',
      classes: {
        root: '',
        heading: 'font-heading font-bold leading-tight text-heading',
        headingExtraLarge: 'text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]',
        headingLarge: 'text-[22px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[32px]',
        headingMedium: 'text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]',
        headingSmall: 'text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
        headingExtraSmall: 'text-[14px] sm:text-[16px] lg:text-[18px]',
      },
      size: HeadingSize.Medium,
    },
    contentArea: [
      {
        id: '39c5ce62-5e7f-4afe-a810-cc9a3365da03',
        name: 'TextContent',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: {
          root: '',
          textContent: 'prose max-w-full',
        },
      },
    ],
  },
  {
    id: '797415a7-58ba-4cf7-a195-98feb28dbca6',
    classes: {
      root: 'border-divider overflow-hidden rounded-lg border',
      toggleButton: 'flex w-full items-center justify-between p-4 hover:bg-body-light/50',
      toggleButtonExpanded: 'border-divider border-b',
      toggleButtonCollapsed: '',
      toggleIconContainer: 'text-accent text-sm transition duration-150',
      toggleIconContainerExpanded: '-rotate-180',
      toggleIconContainerCollapsed: 'rotate-0',
      toggleIcon: 'fa-solid fa-arrow-down',
      contentAreaContainer: 'space-y-4 p-4 @xl:p-5 @3xl:p-6 @5xl:p-8',
      contentAreaContainerExpanded: 'block',
      contentAreaContainerCollapsed: 'hidden',
    },
    heading: {
      id: 'b97a63a8-b39e-4d9a-bba4-ef6c26551622',
      name: 'Heading',
      text: 'Lorem ipsum 2',
      classes: {
        root: '',
        heading: 'font-heading font-bold leading-tight text-heading',
        headingExtraLarge: 'text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[48px]',
        headingLarge: 'text-[22px] sm:text-[25px] md:text-[25px] lg:text-[28px] xl:text-[32px]',
        headingMedium: 'text-[18px] sm:text-[20px] lg:text-[22px] xl:text-[24px]',
        headingSmall: 'text-[16px] sm:text-[16px] md:text-[18px] lg:text-[20px]',
        headingExtraSmall: 'text-[14px] sm:text-[16px] lg:text-[18px]',
      },
      size: HeadingSize.Medium,
    },
    contentArea: [
      {
        id: 'acfe470c-603f-4e25-9c1d-3d71bf60635e',
        name: 'TextContent',
        content:
          '<p><span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: {
          root: '',
          textContent: 'prose max-w-full',
        },
      },
    ],
  },
];
