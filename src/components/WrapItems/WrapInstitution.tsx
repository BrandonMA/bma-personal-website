import { Flex, Heading, Image, Link, Text, WrapItem, WrapItemProps } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { Cell } from '../Cell';

interface Props extends WrapItemProps {
    description: string;
    children: string;
    date: string;
    image: string;
    schoolHref: string;
}

export function WrapInstitution({ schoolHref, children, description, date, image, ...others }: Props): ReactElement {
    return (
        <WrapItem {...others}>
            <Link href={schoolHref} target={'_blank'}>
                <Cell flexDirection={'row'}>
                    <Image borderRadius={'8px'} width={128} marginRight={4} alt={'ECE Logo'} src={image} />
                    <Flex flexDirection={'column'} justifyContent={'center'} maxWidth={300}>
                        <Text>{description}</Text>
                        <Heading marginTop={2} marginBottom={2} size={'md'}>
                            {children}
                        </Heading>
                        <Text>{date}</Text>
                    </Flex>
                </Cell>
            </Link>
        </WrapItem>
    );
}
