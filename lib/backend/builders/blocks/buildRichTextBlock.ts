import { RichTextProps } from '@components/blocks/RichText';
import { UmbracoBlockGridItem } from '@interfaces/Umbraco';

const buildRichTextBlock = (name: string, item: UmbracoBlockGridItem): RichTextProps | undefined => {
  try {
    if (!item || !item.content.properties.richTextContent?.markup) return undefined;

    const richText: RichTextProps = {
      id: item.content.id,
      name,

      content: item.content.properties.richTextContent.markup,
    };

    return richText;
  } catch (error) {
    return undefined;
  }
};

export default buildRichTextBlock;
