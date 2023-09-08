import { HeadingSize } from '@components/blocks/Heading';

import headingVariant1 from '../../Heading/variants/1';
import textContentVariant1 from '../../TextContent/variants/1';
import accordionVariant1 from '../variants/1';

const items = [
  {
    id: '941abec1-2510-4237-bc52-5fa7b8efbc1d',
    classes: accordionVariant1.itemClasses,
    heading: {
      id: '77fdd051-cc6a-4956-ba6f-6a479915f3c3',
      name: 'Heading',
      text: 'Lorem ipsum dolor sit amet',
      classes: headingVariant1.classes,
      size: HeadingSize.Medium,
    },
    contentArea: [
      {
        id: '39c5ce62-5e7f-4afe-a810-cc9a3365da03',
        name: 'TextContent',
        content:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non nisi at nisl ultricies molestie. Aenean pulvinar ac elit volutpat ullamcorper. Duis scelerisque, justo id interdum malesuada, urna purus tincidunt lectus, sit amet sodales erat elit in quam.</p>',
        classes: textContentVariant1.classes,
      },
    ],
  },
  {
    id: '797415a7-58ba-4cf7-a195-98feb28dbca6',
    classes: accordionVariant1.itemClasses,
    heading: {
      id: 'b97a63a8-b39e-4d9a-bba4-ef6c26551622',
      name: 'Heading',
      text: 'Lorem ipsum 2',
      classes: headingVariant1.classes,
      size: HeadingSize.Medium,
    },
    contentArea: [
      {
        id: 'acfe470c-603f-4e25-9c1d-3d71bf60635e',
        name: 'TextContent',
        content:
          '<p><span>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam posuere erat in ipsum facilisis elementum. Pellentesque vel consectetur neque, id consectetur ipsum. Quisque lacinia sapien lectus, vitae sagittis orci rhoncus nec. Sed varius iaculis velit ac pellentesque. Nullam in magna sodales, tempus felis in, finibus diam. Nunc id porta sapien.</span></p>',
        classes: textContentVariant1.classes,
      },
    ],
  },
];

export default items;
