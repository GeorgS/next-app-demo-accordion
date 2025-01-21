import {
  AccordionItem as HeroUiAccordionItem,
  type AccordionItemProps as HeroUiAccordionItemProps,
} from "@heroui/accordion";

export { Accordion } from "@heroui/accordion";

interface AccordionItemProps extends HeroUiAccordionItemProps {}

export function AccordionItem(props: AccordionItemProps) {
  return (
    <HeroUiAccordionItem
      classNames={{ heading: "bg-gray-950 text-white" }}
      {...props}
    />
  );
}
