import { ReactElement } from 'react';
import { Button, Icon, Link, LinkProps } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';

export function TwitterButton(props: LinkProps): ReactElement {
    return (
        <Link {...props} target={'_blank'} href={'https://twitter.com/Brandon10018703'}>
            <Button colorScheme={'twitter'}>
                <Icon as={FaTwitter} />
            </Button>
        </Link>
    );
}
