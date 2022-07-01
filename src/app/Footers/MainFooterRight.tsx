import { HStack } from "@chakra-ui/react"; 
import { FooterLinksCol } from "./FooterLinksCol";

const footerLinkBlock1 = {
  title: "Lend", 
  links: [{name: "Collateral", url:"/collateral", isExternalLink: false},{name: "Loans", url:"/loan", isExternalLink: false}] 
}
const footerLinkBlock2 = {
  title: "Support",
  links: [{name: "FAQ", isExternalLink: false, url:""},{name: "Help", isExternalLink: false, url:""}, {name: "Telegram", isExternalLink: true, url:"https://t.me/goby_network"}, ] 
}

export const MainFooterRight = (): JSX.Element => (
<HStack w="full" alignItems="flex-start" h="full"> 
  <FooterLinksCol footerLinkBlock={footerLinkBlock1} /> 
  <FooterLinksCol footerLinkBlock={footerLinkBlock2} /> 
</HStack>
);
