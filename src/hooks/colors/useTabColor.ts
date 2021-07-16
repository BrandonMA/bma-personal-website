import { useColorModeValue, useTheme } from '@chakra-ui/react';

export function useTabColor(): string {
    const theme = useTheme();
    return useColorModeValue(theme.colors.blue['50'], theme.colors.blue['800']);
}
