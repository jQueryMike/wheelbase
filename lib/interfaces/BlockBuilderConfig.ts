interface BlockBuilderConfig {
  id: string;
  name?: string;
  content?: { [propName: string]: any };
  settings?: { [propName: string]: any };
  parentSettings?: { [propName: string]: any };
  defaultProps?: { [propName: string]: any };
  theme?: any;
}

export default BlockBuilderConfig;
