import { Flex, BoxProps } from '@chakra-ui/react';
import { ReactElement, useEffect } from 'react';
import { useBackgroundColor } from '../hooks/colors/useBackgroundColor';

export function Background(props: BoxProps): ReactElement {
    const backgroundColor = useBackgroundColor();

    useEffect(() => {
        document.body.style.backgroundColor = backgroundColor;
    }, [backgroundColor]);

    return <Flex padding={'24px'} flexDirection='column' backgroundColor={backgroundColor} height='100%' width='100%' {...props} />;
}
