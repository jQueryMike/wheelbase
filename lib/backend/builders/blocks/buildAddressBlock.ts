import { AddressProps } from '@components/blocks/Address';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildAddressBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  inheritedThemes,
}: BlockBuilderConfig): (Block & AddressProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.addressTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const address: Block & AddressProps = { id, name, classes };

    // Build address
    const addressLines: string[] = [];

    if (content?.companyName) addressLines.push(content?.companyName);
    if (content?.line1) addressLines.push(content?.line1);
    if (content?.line2) addressLines.push(content?.line2);
    if (content?.town) addressLines.push(content?.town);
    if (content?.county) addressLines.push(content?.county);
    if (content?.postcode) addressLines.push(content?.postcode);

    let separator = ', ';

    if (content?.separator === 'Line Break') separator = '<br/>';
    if (content?.separator === 'Comma & Line Break') separator = ',<br/>';

    address.address = addressLines.join(separator);

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      address.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    address.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    address.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    return address;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildAddressBlock;
