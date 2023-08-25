interface BlockBuilderConfig {
  id: string;
  name: string;
  content?: { [propName: string]: any };
  settings?: { [propName: string]: any };
  globalTheme?: any;
  globalConfig?: any;
  defaultProps?: any;
  inheritedThemes?: any[];
}

export default BlockBuilderConfig;
