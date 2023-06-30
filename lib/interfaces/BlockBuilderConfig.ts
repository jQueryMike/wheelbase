interface BlockBuilderConfig {
  id: string;
  name?: string;
  content?: { [propName: string]: any };
  settings?: { [propName: string]: any };
}

export default BlockBuilderConfig;
