import { ReactElement } from 'react';
import { Button, Icon, Link, LinkProps } from '@chakra-ui/react';
import { FaLinkedinIn } from 'react-icons/fa';

export function LinkedInButton(props: LinkProps): ReactElement {
    return (
        <Link {...props} target={'_blank'} href={'https://www.linkedin.com/in/brandon-maldonado-alonso-196656123/'}>
            <Button backgroundColor={'#2867B2'}>
                <Icon color={'white'} as={FaLinkedinIn} />
            </Button>
        </Link>
    );
}
