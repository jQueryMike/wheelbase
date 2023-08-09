interface BlockBuilderConfig {
  id: string;
  name?: string;
  content?: { [propName: string]: any };
  settings?: { [propName: string]: any };
  parentVariantId?: string;
  parentOverrides?: { [propName: string]: string };
  globalTheme?: any;
  defaultProps?: any;
}

export default BlockBuilderConfig;
