import React, { ReactElement } from 'react';
import { Avatar } from '@chakra-ui/react';

interface Props {
    size?: 'md' | '2xl';
}

export function ProfilePicture({ size }: Props): ReactElement {
    return <Avatar src='/me.jfif' alt='Profile Image' size={size} />;
}
