import { ContactDetailsItemProps, ContactDetailsProps } from '@components/blocks/ContactDetails';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildContactDetailsBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & ContactDetailsProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.contactDetailsTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build initial block
    const contactDetails: Block & ContactDetailsProps = { id, name, classes };

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      contactDetails.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
        globalConfig,
      });
    }

    // Build items
    const contactDetailsItems = content?.items?.items;
    if (contactDetailsItems && contactDetailsItems.length) {
      contactDetails.contactItems = contactDetailsItems.map((item: any) => {
        const itemContent = item.content?.properties;
        const itemSettings = item.settings?.properties;

        // Build item classes
        const itemClasses = buildBlockClasses({
          name,
          globalBlockTheme,
          inheritedThemes,
          instanceVariant: content?.themeVariant,
          instanceSettings: itemSettings,
          classesIdentifier: 'itemClasses',
        });

        // Build intiial item
        const contactDetailsItem: ContactDetailsItemProps = {
          id: item.content.id,
          label: itemContent.label,
          href: itemContent.href,
          classes: itemClasses,
          icon: itemContent.icon,
        };

        return contactDetailsItem;
      });
    }

    contactDetails.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    contactDetails.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    return contactDetails;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildContactDetailsBlock;
