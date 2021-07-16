import { Flex, BoxProps, useTheme } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useBackgroundColor } from '../hooks/colors/useBackgroundColor';

export function Background(props: BoxProps): ReactElement {
    const backgroundColor = useBackgroundColor();
    const theme = useTheme();

    return <Flex padding={'24px'} flexDirection='column' backgroundColor={backgroundColor} height='100%' width='100%' {...props} />;
}
