import React, { ReactElement } from 'react';
import { Flex, Icon, Link, Text, WrapItem } from '@chakra-ui/react';
import { Cell } from './Cell';
import { GoOctoface, GoStar } from 'react-icons/go';

interface Props {
    href: string;
    title: string;
    starCount: number;
    children: ReactElement | Array<ReactElement>;
    description: string;
}

export function WrapGitHubCell({ href, title, starCount, children, description }: Props): ReactElement {
    return (
        <WrapItem>
            <Link href={href} target={'_blank'} className={'wrap-github-cell'}>
                <Cell>
                    <Flex marginBottom={4} flexDirection={'row'} alignItems={'center'}>
                        <Icon marginRight={2} as={GoOctoface} />
                        <Text fontWeight={'bold'}>{title}</Text>
                        <Flex flex={1} />
                        <Icon as={GoStar} marginRight={1} />
                        <Text>{starCount}</Text>
                    </Flex>
                    <Flex flexDirection={'row'} marginBottom={4}>
                        {children}
                    </Flex>
                    <Text size={'sm'} color={'gray.500'}>
                        {description}
                    </Text>
                </Cell>
            </Link>
        </WrapItem>
    );
}
