import { AddressProps } from '@components/blocks/Address';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildAddressBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & AddressProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalAddressThemeProperties = globalTheme?.addressTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalAddressThemeProperties?.variant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/Address/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalAddressThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const address: Block & AddressProps = { id, name };

    // Add classes
    address.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

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
      const headingsThemeProperties = globalAddressThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      address.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    address.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalAddressThemeProperties,
      globalTheme,
    });

    address.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalAddressThemeProperties,
      globalTheme,
    });

    return address;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildAddressBlock;
