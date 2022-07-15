import React from 'react';
import { Link, VStack, List, ListItem, Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

type linkItemArray = {
  name: string;
  isExternalLink?: boolean;
  url: string;
}[];

type footerLinksType = {
  title: string;
  links: linkItemArray;
};

const ulStyle = {
  fontSize: '16px',
  letterSpacing: '0.02em',
  fontWeight: '400',
  listStyleType: 'none',
  color: 'text.900',
} as const;

export const FooterLinksCol = ({
  footerLinkBlock,
}: {
  footerLinkBlock: footerLinksType;
}) => {
  const { title, links } = footerLinkBlock;
  return (
    <VStack w="full">
      <List sx={ulStyle} spacing="20px">
        <ListItem>
          <Heading
            as="h5"
            sx={{ marginBottom: '10px', fontSize: '20px', fontWeight: '500' }}
          >
            {title}
          </Heading>
        </ListItem>
        {links.map((link) => (
          <ListItem key={link.name}>
            {link.isExternalLink ? (
              <a target="_blank" rel="noreferrer" href={link.url}>
                {link.name}
              </a>
            ) : (
              <NextLink key={link.name} href={link.url} passHref>
                <Link key={link.name}>{link.name}</Link>
              </NextLink>
            )}
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};
