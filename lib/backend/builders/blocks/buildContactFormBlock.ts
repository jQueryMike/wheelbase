import { ContactFormProps } from '@components/blocks/ContactForm';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';
import { v4 as uuidv4 } from 'uuid';

import buildAdditionalContent from '../buildAdditionalContent';
import buildTheme from '../buildTheme';
import extractClassOverrides from '../extractClassOverrides';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildContactFormBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
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

    // Build submit button
    const buttonThemeProperties = globalContactFormThemeProperties?.submitButtonTheme?.items[0]?.content?.properties;

    const submitButton = buildButtonBlock({
      id: uuidv4(),
      name: 'Button',
      content: {
        type: 'submit',
        link: [
          {
            title: content?.buttonText || 'Send message',
          },
        ],
      },
      settings: {},
      parentVariantId: buttonThemeProperties?.themeVariant,
      parentOverrides: extractClassOverrides(buttonThemeProperties),
      globalTheme,
    })!;

    // Build initial block
    const contactForm: Block & ContactFormProps = { id, name, submitButton };

    // Add classes
    contactForm.classes = buildTheme({
      classes: activeVariant.classes,
      globalOverrides,
      instanceOverrides,
    });

    // Add labels and button text
    if (content?.nameLabel) contactForm.nameLabel = content.nameLabel;
    if (content?.telephoneLabel) contactForm.telephoneLabel = content.telephoneLabel;
    if (content?.emailLabel) contactForm.emailLabel = content.emailLabel;
    if (content?.messageLabel) contactForm.messageLabel = content.messageLabel;
    if (content?.buttonText) contactForm.buttonText = content.buttonText;

    // Create recipients array
    const recipients: string[] = [
      ...(content?.formRecipients?.items?.map((item: any) => item.content.properties.emailAddress) || []),
      ...(globalConfig?.defaultContactFormRecipients?.items?.map((item: any) => item.content.properties.emailAddress) ||
        []),
    ];
    contactForm.recipients = [...new Set(recipients)];

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

    // Add content areas
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

    contactForm.thankYouContentArea = buildAdditionalContent({
      items: content?.thankYouContentArea?.items,
      parentThemeProperties: globalContactFormThemeProperties,
      globalTheme,
    });

    contactForm.formContentArea = buildAdditionalContent({
      items: content?.formContentArea?.items,
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