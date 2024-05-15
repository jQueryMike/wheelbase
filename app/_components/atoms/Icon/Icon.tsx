import iconClasses from "./Icon.classes";
import { IconProps } from "./Icon.types";
import { BaseComponent } from "@components/utils/BaseComponent";
import { buildClasses } from "@utils/buildClasses";

const Icon = ({ icon, styling, overrides }: IconProps) => {
  const classes = buildClasses(iconClasses, overrides);
  return (
    <BaseComponent
      data-testid="icon"
      className={classes.root}
      as="div"
      styling={styling}
      stylingOptions={{ atomicType: "atom", textType: "icon" }}
    >
      <i className={`${icon}`} />
    </BaseComponent>
  );
};

export default Icon;
