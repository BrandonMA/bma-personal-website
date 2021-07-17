import { ReactElement } from 'react';
import { Button, Icon, Link, LinkProps } from '@chakra-ui/react';
import { GoOctoface } from 'react-icons/go';

export function GitHubButton(props: LinkProps): ReactElement {
    return (
        <Link {...props} target={'_blank'} href={'https://github.com/BrandonMA'}>
            <Button colorScheme={'gray'}>
                <Icon as={GoOctoface} />
            </Button>
        </Link>
    );
}
