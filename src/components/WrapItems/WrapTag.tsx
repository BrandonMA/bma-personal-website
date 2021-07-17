import { Tag, WrapItem, WrapItemProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { ThemeTypings } from '@chakra-ui/styled-system';

interface Props extends WrapItemProps {
    children: string;
    colorScheme?: ThemeTypings['colorSchemes'];
}

export function WrapTag({ children, colorScheme, ...others }: Props): ReactElement {
    return (
        <WrapItem {...others}>
            <Tag colorScheme={colorScheme}>{children}</Tag>
        </WrapItem>
    );
}
