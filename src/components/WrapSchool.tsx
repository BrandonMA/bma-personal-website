import { Flex, Heading, Image, Stat, StatHelpText, StatLabel, StatNumber, Text, WrapItem } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Cell } from './Cell';

interface Props {
    description: string;
    children: string;
    date: string;
    image: string;
}

export function WrapSchool({ children, description, date, image }: Props): ReactElement {
    return (
        <WrapItem>
            <Cell flexDirection={'row'}>
                <Image width={128} marginRight={4} alt={'ECE Logo'} src={image} />
                <Flex flexDirection={'column'} justifyContent={'center'} maxWidth={300}>
                    <Text>{description}</Text>
                    <Heading marginTop={2} marginBottom={2} size={'md'}>
                        {children}
                    </Heading>
                    <Text>{date}</Text>
                </Flex>
            </Cell>
        </WrapItem>
    );
}
