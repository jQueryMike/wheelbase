import { AddressProps } from '@components/blocks/Address';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';
import buildTextContentBlock from './buildTextContentBlock';

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

    // Build items
    if (content?.line1) address.line1 = content.line1;
    if (content?.line2) address.line2 = content.line2;
    if (content?.town) address.town = content.town;
    if (content?.county) address.county = content.county;
    if (content?.postcode) address.postcode = content.postcode;
    if (content?.companyName) address.companyName = content.companyName;
    if (content?.separator) address.separator = content.separator;

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalAddressThemeProperties?.headingTheme?.items[0]?.content?.properties;

      address.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties = globalAddressThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      address.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.variant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
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
