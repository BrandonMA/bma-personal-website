import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { useForegroundColor } from '../hooks/colors/useForegroundColor';

export function Cell(props: FlexProps): ReactElement {
    const foregroundColor = useForegroundColor();

    return (
        <Flex
            padding={'16px'}
            borderRadius={'base'}
            shadow={'sm'}
            backgroundColor={foregroundColor}
            className='cell'
            flexDirection={'column'}
            {...props}
        />
    );
}
