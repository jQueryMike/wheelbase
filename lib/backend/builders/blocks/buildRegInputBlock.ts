import { RegInputProps } from '@components/blocks/RegInput';
import Block from '@interfaces/Block';
import BlockBuilderConfig from '@interfaces/BlockBuilderConfig';

import buildAdditionalContent from '../buildAdditionalContent';
import buildBlockClasses from '../buildBlockClasses';
import extractInheritedTheme from '../extractInheritedTheme';
import buildHeadingsBlock from './buildHeadingsBlock';

const buildRegInputBlock = ({
  id,
  name,
  content,
  settings,
  globalTheme,
  globalConfig,
  inheritedThemes,
}: BlockBuilderConfig): (Block & RegInputProps) | undefined => {
  try {
    // Shortcut to block theme properties from globalTheme
    const globalBlockTheme = globalTheme?.regInputTheme?.items[0]?.content?.properties;

    // Build classes
    const classes = buildBlockClasses({
      name,
      globalBlockTheme,
      inheritedThemes,
      instanceVariant: content?.themeVariant,
      instanceSettings: settings,
      gridColsOverrides: [{ className: 'itemsContainer', content, queryType: 'container' }],
    });

    // Build initial block
    const regInput: Block & RegInputProps = { id, name, classes };

    // Build click-buy url
    let clickBuyUrlSuffix = '';
    if (process.env.ENVIRONMENT_NAME === 'local') clickBuyUrlSuffix = '.click-buy.clickdealer.dev/vrm-lookup?vrm=';
    if (process.env.ENVIRONMENT_NAME === 'production') clickBuyUrlSuffix = '.sell-my-vehicle.co.uk/vrm-lookup?vrm=';
    if (process.env.ENVIRONMENT_NAME === 'staging') clickBuyUrlSuffix = '.click-buy.clickdealer.guru/vrm-lookup?vrm=';

    regInput.clickBuyUrl = `https://${globalConfig.clickBuyUrlPrefix}${clickBuyUrlSuffix}`;

    // Add headings
    const headings = content?.headings?.items[0];
    if (headings) {
      const headingsTheme = globalBlockTheme?.headingsTheme?.items[0]?.content?.properties;

      regInput.headings = buildHeadingsBlock({
        id: headings.content.id,
        name: 'Headings',
        content: headings.content.properties,
        settings: headings.settings.properties,
        inheritedThemes: [headingsTheme, ...extractInheritedTheme('headings', inheritedThemes)],
        globalTheme,
      });
    }

    regInput.contentArea1 = buildAdditionalContent({
      items: content?.contentArea1?.items,
      globalBlockTheme,
      globalTheme,
      globalConfig,
      inheritedThemes,
    });

    regInput.contentArea2 = buildAdditionalContent({
      items: content?.contentArea2?.items,
      globalBlockTheme,
      globalTheme,
      inheritedThemes,
    });

    return regInput;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default buildRegInputBlock;
