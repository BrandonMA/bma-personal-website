import React, { ReactElement } from 'react';
import { WrapSchool } from '../components/WrapSchool';
import { Wrap } from '@chakra-ui/react';

export function Schools(): ReactElement {
    return (
        <Wrap justify={'center'}>
            <WrapSchool schoolHref={'https://tec.mx/es'} description={'Business Informatics'} date={'2016 - 2021'} image={'tec.jfif'}>
                Tecnológico de Monterrey
            </WrapSchool>
            <WrapSchool
                schoolHref={'https://www.ajou.ac.kr/en/index.do'}
                description={'Computer Science'}
                date={'2021 Spring Semester'}
                image={'/ajou.png'}
            >
                Ajou University
            </WrapSchool>
            <WrapSchool
                schoolHref={'https://www.ajou.ac.kr/en/index.do'}
                description={'Global Management'}
                date={'2018 - 2019 Full Year'}
                image={'/bremen.jfif'}
            >
                Hochschule Bremen
            </WrapSchool>
            <WrapSchool
                schoolHref={'https://www.cvut.cz/en'}
                description={'Artificial Intelligence'}
                date={'2018 Summer'}
                image={'/prague.jfif'}
            >
                Czech technical university in Prague
            </WrapSchool>
            <WrapSchool
                schoolHref={'https://www.ece.fr/ecole-ingenieur/'}
                description={'Computer Systems Technology'}
                date={'2017 Summer'}
                image={'/ece.png'}
            >
                ECE Paris
            </WrapSchool>
        </Wrap>
    );
}
