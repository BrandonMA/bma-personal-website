import { BoxProps, Flex, useTheme } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useForegroundColor } from '../hooks/colors/useForegroundColor';

export function Cell(props: BoxProps): ReactElement {
    const foregroundColor = useForegroundColor();
    const theme = useTheme();

    return (
        <Flex
            padding={'16px'}
            borderRadius={theme.radii.base}
            shadow={theme.shadows.sm}
            backgroundColor={foregroundColor}
            className='cell'
            flexDirection={'column'}
            {...props}
        />
    );
}
