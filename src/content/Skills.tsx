import React, { ReactElement } from 'react';
import { Container, Heading, VStack, Wrap } from '@chakra-ui/react';
import { WrapTitleCell } from '../components/WrapItems/WrapTitleCell';
import { WrapTag } from '../components/WrapItems/WrapTag';

export function Skills(): ReactElement {
    return (
        <VStack spacing='12px'>
            <Container>
                <Heading textAlign='center' size='md'>
                    Skills & Knowledge
                </Heading>
            </Container>
            <Wrap justify='center'>
                <WrapTitleCell title='Programming Languages & Frameworks'>
                    <Wrap>
                        <WrapTag>HTML</WrapTag>
                        <WrapTag colorScheme='red'>CSS</WrapTag>
                        <WrapTag colorScheme='yellow'>JavaScript</WrapTag>
                        <WrapTag colorScheme='blue'>TypeScript</WrapTag>
                        <WrapTag colorScheme='blue'>React</WrapTag>
                        <WrapTag colorScheme='blue'>React Native</WrapTag>
                        <WrapTag colorScheme='purple'>Redux</WrapTag>
                        <WrapTag colorScheme='blue'>Recoil.JS</WrapTag>
                        <WrapTag>Next.JS</WrapTag>
                        <WrapTag colorScheme='orange'>Swift</WrapTag>
                        <WrapTag colorScheme='green'>Kotlin</WrapTag>
                        <WrapTag colorScheme='pink'>Framer Motion</WrapTag>
                        <WrapTag colorScheme='purple'>Expo</WrapTag>
                        <WrapTag colorScheme='green'>Python</WrapTag>
                    </Wrap>
                </WrapTitleCell>
                <WrapTitleCell title='Tools'>
                    <Wrap>
                        <WrapTag>Git / Github</WrapTag>
                        <WrapTag colorScheme='purple'>Heroku</WrapTag>
                        <WrapTag colorScheme='blue'>Digital Ocean</WrapTag>
                        <WrapTag colorScheme='orange'>Sketch</WrapTag>
                        <WrapTag colorScheme='red'>Firebase</WrapTag>
                        <WrapTag colorScheme='orange'>AWS</WrapTag>
                    </Wrap>
                </WrapTitleCell>
                <WrapTitleCell title='Competences'>
                    <Wrap>
                        <WrapTag>Adaptability</WrapTag>
                        <WrapTag>Creativity</WrapTag>
                        <WrapTag>Leadership</WrapTag>
                        <WrapTag>Strategic Thinking</WrapTag>
                        <WrapTag>Bilingual</WrapTag>
                    </Wrap>
                </WrapTitleCell>
            </Wrap>
        </VStack>
    );
}
