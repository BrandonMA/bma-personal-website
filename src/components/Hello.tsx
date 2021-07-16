import { ReactElement } from 'react';
import { Text } from '@chakra-ui/react';

export function Hello(): ReactElement {
    return (
        <Text display='inline-block' as={'span'} marginRight={'8px'} className='hello'>
            👋🏽
        </Text>
    );
}
