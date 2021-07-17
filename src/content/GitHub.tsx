import React, { ReactElement } from 'react';
import { Container, Heading, Tag, VStack, Wrap } from '@chakra-ui/react';
import { WrapGitHubCell } from '../components/WrapItems/WrapGitHubCell';

export function GitHub(): ReactElement {
    return (
        <>
            <VStack spacing={'12px'}>
                <Heading size={'lg'}>GitHub Repos</Heading>
            </VStack>
            <Wrap justify={'center'}>
                <WrapGitHubCell
                    href={'https://github.com/BrandonMA/fractal'}
                    title={'Fractal Libraries'}
                    starCount={1}
                    description={
                        'Fractal is the repository for all the packages released under the domain of @bma98/fractal-*, cross platform components for React and React Native.'
                    }
                >
                    <Tag marginRight={2} colorScheme={'blue'}>
                        TypeScript
                    </Tag>
                    <Tag colorScheme={'yellow'}>Development</Tag>
                </WrapGitHubCell>
                <WrapGitHubCell
                    href={'https://github.com/BrandonMA/size-class'}
                    title={'Size-Class'}
                    starCount={2}
                    description={
                        'Library meant to simplify responsive development providing 4 different types of layout. Cross Platform React and React Native.'
                    }
                >
                    <Tag marginRight={2} colorScheme={'blue'}>
                        TypeScript
                    </Tag>
                    <Tag colorScheme={'green'}>Tested</Tag>
                </WrapGitHubCell>
                <WrapGitHubCell
                    href={'https://github.com/BrandonMA/firebase-db-manager'}
                    title={'firebase-db-manager'}
                    starCount={1}
                    description={
                        'Library meant to represent firebase more like a normal database with an object that exports the correct methods for both React and React Native.'
                    }
                >
                    <Tag marginRight={2} colorScheme={'blue'}>
                        TypeScript
                    </Tag>
                    <Tag colorScheme={'yellow'}>Testing Pending</Tag>
                </WrapGitHubCell>
                <WrapGitHubCell
                    href={'https://github.com/BrandonMA/bma-personal-website'}
                    title={'bma-personal-website'}
                    starCount={1}
                    description={'This website, more features are coming, including a blog.'}
                >
                    <Tag marginRight={2} colorScheme={'blue'}>
                        TypeScript
                    </Tag>
                </WrapGitHubCell>
            </Wrap>
        </>
    );
}
