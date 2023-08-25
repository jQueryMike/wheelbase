import { ContactFormProps } from '@components/blocks/ContactForm';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';
import { v4 as uuidv4 } from 'uuid';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildButtonBlock from './buildButtonBlock';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildContactFormBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & ContactFormProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.contactFormTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
    });

    // Build submit button
    const buttonTheme = globalBlockTheme?.submitButtonTheme?.items[0]?.content?.properties;

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
      inheritedThemes: [buttonTheme, ...extractInheritedTheme('button', inheritedThemes)],
      globalTheme,
    })!;

    // Build initial block
    const contactForm: Block & ContactFormProps = { id, name, submitButton, classes };

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
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      contactForm.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    // Add content areas
    contactForm.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    contactForm.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    contactForm.thankYouContentArea = buildAdditionalContent({
      items: content?.thankYouContentArea?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    contactForm.formContentArea = buildAdditionalContent({
      items: content?.formContentArea?.items,
      globalBlockTheme,
      globalTheme,
    });

    return contactForm;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildContactFormBlock;
