import { Tag, WrapItem } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { ThemeTypings } from '@chakra-ui/styled-system';

interface Props {
    children: string;
    colorScheme?: ThemeTypings['colorSchemes'];
}

export function WrapTag({ children, colorScheme }: Props): ReactElement {
    return (
        <WrapItem>
            <Tag colorScheme={colorScheme}>{children}</Tag>
        </WrapItem>
    );
}
