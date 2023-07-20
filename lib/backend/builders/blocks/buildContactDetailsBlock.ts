import { ContactDetailsItemProps, ContactDetailsProps } from '@components/blocks/ContactDetails';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildContactDetailsBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & ContactDetailsProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalContactDetailsThemeProperties = globalTheme?.contactDetailsTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalContactDetailsThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/ContactDetails/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalContactDetailsThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const contactDetails: Block & ContactDetailsProps = { id, name };

    // Add classes
    contactDetails.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalContactDetailsThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      contactDetails.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    // Build items
    const contactDetailsItems = content?.contactItems?.items;
    if (contactDetailsItems && contactDetailsItems.length) {
      contactDetails.contactItems = contactDetailsItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalContactDetailsThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const contactDetailsItem: ContactDetailsItemProps = {
          id: item.content.id,
          label: itemContent.label,
          href: itemContent.href,
          classes: buildTheme({
            classes: activeVariant.itemClasses,
            globalOverrides: itemGlobalOverrides,
            instanceOverrides: itemInstanceOverrides,
          }),
          icon: itemContent.icon,
        };

        return contactDetailsItem;
      });
    }

    contactDetails.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalContactDetailsThemeProperties,
      globalTheme,
    });

    contactDetails.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalContactDetailsThemeProperties,
      globalTheme,
    });

    return contactDetails;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildContactDetailsBlock;
