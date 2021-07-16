import React, { ForwardedRef, forwardRef } from 'react';
import { Avatar, useTheme } from '@chakra-ui/react';

interface Props {
    size?: 'md' | '2xl';
}

export const ProfilePicture = forwardRef(({ size = 'md' }: Props, ref: ForwardedRef<any>) => {
    return (
        <Avatar
            src='https://media-exp1.licdn.com/dms/image/C5103AQE1N8kmUskHrw/profile-displayphoto-shrink_400_400/0/1517242727434?e=1631750400&v=beta&t=9puIRdGPhhOO_bnHKW1ZiSrPC11u8Jwx2RrhwROab64'
            alt='Profile Image'
            size={size}
        />
    );
});

ProfilePicture.displayName = 'ProfilePicture';
