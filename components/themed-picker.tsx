import { useThemeColor } from '@/hooks/use-theme-color';
import { Picker as RNPicker } from '@react-native-picker/picker';
import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

export type ThemedPickerProps<T> = {
    selectedValue: T;
    onValueChange: (itemValue: T, itemIndex: number) => void;
    items: { label: string; value: T }[];
    style?: any;
};

export function ThemedPicker<T>({ selectedValue, onValueChange, items, style }: ThemedPickerProps<T>) {
    const color = useThemeColor({}, 'text');
    const borderColor = useThemeColor({}, 'border');
    const backgroundColor = useThemeColor({}, 'background');

    if (Platform.OS === 'web') {
        return (
            <select
                value={selectedValue as any}
                onChange={e => onValueChange((e.target.value as unknown) as T, e.target.selectedIndex)}
                style={{
                    color,
                    backgroundColor,
                    borderColor,
                    borderWidth: 1,
                    borderRadius: 6,
                    padding: 10,
                    marginBottom: 20,
                    fontSize: 16,
                    ...style,
                }}
            >
                {items.map(item => (
                    <option value={item.value as any} key={item.value as any}>
                        {item.label}
                    </option>
                ))}
            </select>
        );
    }

    return (
        <View style={[styles.pickerContainer, { borderColor, backgroundColor }, style]}>
            <RNPicker
                selectedValue={selectedValue}
                onValueChange={onValueChange}
                style={{ color }}
                dropdownIconColor={color}
            >
                {items.map(item => (
                    <RNPicker.Item label={item.label} value={item.value} key={item.value as any} />
                ))}
            </RNPicker>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderRadius: 6,
        marginBottom: 20,
    },
});
