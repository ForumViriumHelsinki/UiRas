import "moment/locale/fi";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarFooter from "./ResponsiveAppBarFooter";
import UirasListAccordion from "./UirasListAccordion";

export function UirasUI(): JSX.Element {
  return (
    <>
      <ResponsiveAppBar/>
      <UirasListAccordion/>
      <ResponsiveAppBarFooter/>
    </>
  );
}
