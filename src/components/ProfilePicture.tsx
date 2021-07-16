import React, { ForwardedRef, forwardRef } from 'react';
import { Avatar, useTheme } from '@chakra-ui/react';

interface Props {
    size?: 'md' | '2xl';
}

export const ProfilePicture = forwardRef(({ size = 'md' }: Props, ref: ForwardedRef<any>) => {
    return <Avatar src='/me.jfif' alt='Profile Image' size={size} />;
});

ProfilePicture.displayName = 'ProfilePicture';
