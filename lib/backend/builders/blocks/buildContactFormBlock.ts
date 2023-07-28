import { ContactFormProps } from '@components/blocks/ContactForm';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildContactFormBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
}: BlockBuilderConfig): (Block & ContactFormProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalContactFormThemeProperties = globalTheme?.contactFormTheme?.items[0]?.content?.properties;

    // Get active variant from instance > global > default variant id
    const instanceVariantId = content?.themeVariant;
    const globalVariantId = globalContactFormThemeProperties?.themeVariant;
    const blockVariantId = instanceVariantId || globalVariantId || '1';
    const activeVariant = require(`/lib/components/blocks/ContactForm/variants/${blockVariantId}`).default || undefined;

    // Get global and instance overrides
    const globalOverrides = extractClassOverrides(globalContactFormThemeProperties);
    const instanceOverrides = extractClassOverrides(settings);

    // Build initial block
    const contactForm: Block & ContactFormProps = { id, name };

    // Add classes
    contactForm.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    //Add content
    if (content?.nameText) contactForm.nameText = content.nameText;

    if (content?.telephoneText) contactForm.telephoneText = content.telephoneText;

    if (content?.emailText) contactForm.emailText = content.emailText;

    if (content?.messageText) contactForm.messageText = content.messageText;

    if (content?.buttonText) contactForm.buttonText = content.buttonText;

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsThemeProperties = globalContactFormThemeProperties?.headingsTheme?.items[0]?.content?.properties;

      contactForm.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        parentVariantId: headingsThemeProperties?.themeVariant,
        parentOverrides: extractClassOverrides(headingsThemeProperties),
        globalTheme,
      });
    }

    contactForm.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      parentThemeProperties: globalContactFormThemeProperties,
      globalTheme,
    });

    contactForm.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      parentThemeProperties: globalContactFormThemeProperties,
      globalTheme,
    });

    return contactForm;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildContactFormBlock;
