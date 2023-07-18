import { TelephoneNumberItemProps, TelephoneNumberProps } from '@components/blocks/TelephoneNumber';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingBlock from './buildHeadingBlock';
import buildSubheadingBlock from './buildSubheadingBlock';
import buildTextContentBlock from './buildTextContentBlock';

const buildTelephoneNumberBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & TelephoneNumberProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalTelephoneNumberThemeProperties = globalTheme?.telephoneNumberTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalTelephoneNumberThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant =
      require(`/lib/components/blocks/TelephoneNumber/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalTelephoneNumberThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const telephoneNumber: Block & TelephoneNumberProps = { id, name };

    // Add classes
    telephoneNumber.classes = buildTheme({
      classes: activeVariant.classes,
      gridColsOverrides: [{ className: 'itemsContainer', config: content }],
      globalOverrides,
      instanceOverrides,
    });

    // Add heading
    const heading = content?.heading?.items[0];
    if (heading) {
      const headingThemeProperties = globalTelephoneNumberThemeProperties?.headingTheme?.items[0]?.content?.properties;

      telephoneNumber.heading = buildHeadingBlock({
        id: heading.content.id,
        name: 'Heading',
        content: heading.content.properties,
        settings: heading.settings.properties,
        parentVariantId: headingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingThemeProperties),
        globalTheme,
      });
    }

    // Add subheading
    const subheading = content?.subheading?.items[0];
    if (subheading) {
      const subheadingThemeProperties =
        globalTelephoneNumberThemeProperties?.subheadingTheme?.items[0]?.content?.properties;

      telephoneNumber.subheading = buildSubheadingBlock({
        id: subheading.content.id,
        name: 'Subheading',
        content: subheading.content.properties,
        settings: subheading.settings.properties,
        parentVariantId: subheadingThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(subheadingThemeProperties),
        globalTheme,
      });
    }

    // Build items
    const telephoneNumberItems = content?.contactItems?.items;
    console.log(telephoneNumberItems);
    if (telephoneNumberItems && telephoneNumberItems.length) {
      telephoneNumber.contactItems = telephoneNumberItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Get global and instance overrides
        const itemGlobalOverrides = extractClassOverrides(globalTelephoneNumberThemeProperties, 'tw_item__');
        const itemInstanceOverrides = extractClassOverrides(itemSettings);

        // Build intiial item
        const telephoneNumberItem: TelephoneNumberItemProps = {
          key: itemContent.key,
          label: itemContent.label,
          href: itemContent.href,
          classes: buildTheme({
            classes: activeVariant.itemClasses,
            globalOverrides: itemGlobalOverrides,
            instanceOverrides: itemInstanceOverrides,
          }),
          icon: itemContent.icon,
        };

        return telephoneNumberItem;
      });
    }

    telephoneNumber.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalTelephoneNumberThemeProperties,
      globalTheme,
    });

    telephoneNumber.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalTelephoneNumberThemeProperties,
      globalTheme,
    });

    if (content?.itemIcon) telephoneNumber.itemIcon = content?.itemIcon;

    return telephoneNumber;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildTelephoneNumberBlock;
