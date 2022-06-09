import "moment/locale/fi";

import { Container } from "reactstrap";

import ResponsiveAppBar from "./ResponsiveAppBar";
import ResponsiveAppBarFooter from "./ResponsiveAppBarFooter";
import UirasListAccordion from "./UirasListAccordion";

export function UirasUI(): JSX.Element {
  return (
    <>
      <ResponsiveAppBar />
      <Container fluid>
        <UirasListAccordion />
      </Container>
      <ResponsiveAppBarFooter />
    </>
  );
}
