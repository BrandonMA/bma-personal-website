import React, { ReactElement } from 'react';
import { WrapSchool } from '../components/WrapSchool';
import { Wrap } from '@chakra-ui/react';

export function Schools(): ReactElement {
    return (
        <Wrap justify={'center'}>
            <WrapSchool
                description={'Business Informatics'}
                date={'2016 - 2021'}
                image={
                    'https://media-exp1.licdn.com/dms/image/C4E0BAQEedQ5sAtdEQw/company-logo_200_200/0/1616088624159?e=1634774400&v=beta&t=55u7Cg98VLFzLy4BfhAfQ8R9mu8Ynw3Mzt4Hb6VkRTc'
                }
            >
                Tecnológico de Monterrey
            </WrapSchool>
            <WrapSchool
                description={'Computer Science'}
                date={'2021 Spring Semester'}
                image={
                    'https://media-exp1.licdn.com/dms/image/C560BAQHYa6ScWlkSXA/company-logo_200_200/0/1519906818281?e=1634774400&v=beta&t=zUQJGawMJc3Wadu2KTw3_JOpvAXM822YE6kHLJpm7Dc'
                }
            >
                Ajou University
            </WrapSchool>
            <WrapSchool
                description={'Global Management'}
                date={'2018 - 2019 Full Year'}
                image={
                    'https://media-exp1.licdn.com/dms/image/C4D0BAQEIN6jRyjj0nQ/company-logo_200_200/0/1531491370328?e=1634774400&v=beta&t=sNEQtZvCD7o3H0Dg047VkQajDuG4QYxZE6TMiRarvzA'
                }
            >
                Hochschule Bremen
            </WrapSchool>
            <WrapSchool
                description={'Artificial Intelligence'}
                date={'2018 Summer'}
                image={
                    'https://media-exp1.licdn.com/dms/image/C560BAQFKe9BVFdq9Cg/company-logo_200_200/0/1613146491053?e=1634774400&v=beta&t=vjOm3zT6BA9Aoz4nqDX61oExX7QPcV_BpB5hIZcmlUI'
                }
            >
                Czech technical university in Prague
            </WrapSchool>
            <WrapSchool
                description={'Computer Systems Technology'}
                date={'2017 Summer'}
                image={
                    'https://media-exp1.licdn.com/dms/image/C4D0BAQGuhHBuCTdNPw/company-logo_200_200/0/1575645097608?e=1634774400&v=beta&t=d3CHcAb0s2-OLSpiUUdm6tAS8wBUGfOFWuQG6D0LrIg'
                }
            >
                ECE Paris
            </WrapSchool>
        </Wrap>
    );
}
