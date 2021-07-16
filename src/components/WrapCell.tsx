import { Flex, Heading, WrapItem } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Cell } from './Cell';

interface Props {
    children: ReactElement | Array<ReactElement>;
    title: string;
}

export function WrapCell({ title, children }: Props): ReactElement {
    return (
        <WrapItem>
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
