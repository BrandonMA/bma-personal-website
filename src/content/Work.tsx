import React, { ReactElement } from 'react';
import { WrapInstitution } from '../components/WrapItems/WrapInstitution';
import { VStack, Wrap } from '@chakra-ui/react';
import { WorkDescription } from './WorkDescription';

export function Work(): ReactElement {
    return (
        <VStack spacing={'12px'}>
            <WorkDescription />
            <Wrap justify={'center'}>
                <WrapInstitution
                    schoolHref={'https://enchispate.com/'}
                    description={'Web App'}
                    date={'2021'}
                    image={'/chispa.jpeg'}
                >
                    La Chispa Incubadora
                </WrapInstitution>
                <WrapInstitution
                    schoolHref={'https://chiff.app/'}
                    description={'Password Manager'}
                    date={'2019 - 2020'}
                    image={'/chiff.png'}
                >
                    Chiff
                </WrapInstitution>
                <WrapInstitution
                    schoolHref={'https://www.contact-software.com/de/'}
                    description={'UI Library'}
                    date={'2018 - 2019'}
                    image={'/contact.png'}
                >
                    Contact Software
                </WrapInstitution>
            </Wrap>
        </VStack>
    );
}
