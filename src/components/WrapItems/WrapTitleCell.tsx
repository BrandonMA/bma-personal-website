import { Flex, Heading, WrapItem, WrapItemProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Cell } from '../Cell';

interface Props extends WrapItemProps {
    children: ReactElement | Array<ReactElement>;
    title: string;
}

export function WrapTitleCell({ title, children, ...others }: Props): ReactElement {
    return (
        <WrapItem {...others}>
            <Cell>
                <Flex flexDirection={'row'}>
                    <Heading marginBottom={4} size='sm'>
                        {title}
                    </Heading>
                </Flex>
                {children}
            </Cell>
        </WrapItem>
    );
}
