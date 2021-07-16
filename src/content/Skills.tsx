import React, { ReactElement } from 'react';
import { Heading, VStack, Wrap } from '@chakra-ui/react';
import { WrapCell } from '../components/WrapCell';
import { WrapTag } from '../components/WrapTag';

export function Skills(): ReactElement {
    return (
        <VStack spacing='12px'>
            <Heading textAlign='center' size='md'>
                Skills & Knowledge
            </Heading>
            <Wrap justify='center'>
                <WrapCell title='Programming Languages & Frameworks'>
                    <Wrap>
                        <WrapTag>HTML</WrapTag>
                        <WrapTag colorScheme='red'>CSS</WrapTag>
                        <WrapTag colorScheme='yellow'>JavaScript</WrapTag>
                        <WrapTag colorScheme='blue'>React</WrapTag>
                        <WrapTag colorScheme='purple'>Redux</WrapTag>
                        <WrapTag colorScheme='blue'>Recoil.JS</WrapTag>
                        <WrapTag>Next.JS</WrapTag>
                        <WrapTag colorScheme='orange'>Swift</WrapTag>
                        <WrapTag colorScheme='green'>Kotlin</WrapTag>
                    </Wrap>
                </WrapCell>
                <WrapCell title='Tools'>
                    <Wrap>
                        <WrapTag>Git / Github</WrapTag>
                        <WrapTag colorScheme='purple'>Heroku</WrapTag>
                        <WrapTag colorScheme='blue'>Digital Ocean</WrapTag>
                        <WrapTag colorScheme='orange'>Sketch</WrapTag>
                        <WrapTag colorScheme='red'>Firebase</WrapTag>
                        <WrapTag colorScheme='orange'>AWS</WrapTag>
                    </Wrap>
                </WrapCell>
                <WrapCell title='Competences'>
                    <Wrap>
                        <WrapTag>Adaptability</WrapTag>
                        <WrapTag>Creativity</WrapTag>
                        <WrapTag>Leadership</WrapTag>
                        <WrapTag>Strategic Thinking</WrapTag>
                        <WrapTag>Bilingual</WrapTag>
                    </Wrap>
                </WrapCell>
            </Wrap>
        </VStack>
    );
}
