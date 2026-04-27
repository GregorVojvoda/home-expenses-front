import { useThemeColor } from '@/hooks/use-theme-color';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

export type ThemedInputProps = TextInputProps & {
    lightColor?: string;
    darkColor?: string;
};

export function ThemedInput({
    style,
    lightColor,
    darkColor,
    ...rest
}: ThemedInputProps) {
    const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const borderColor = useThemeColor({ light: lightColor, dark: darkColor }, 'border');

    return (
        <TextInput
            style={[
                { color, backgroundColor, borderColor },
                styles.input,
                style,
            ]}
            placeholderTextColor={color + '99'}
            {...rest}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        lineHeight: 24,
        borderWidth: 1,
        borderRadius: 6,
        padding: 10,
        marginBottom: 12,
    },
});
