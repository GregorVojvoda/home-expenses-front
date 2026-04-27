import { useThemeColor } from '@/hooks/use-theme-color';
import DateTimePicker from '@react-native-community/datetimepicker';
import React from 'react';
import { Platform, Pressable, Text, View } from 'react-native';

export type ThemedCalendarInputProps = {
    value: Date;
    onChange: (date: Date) => void;
    minimumDate?: Date;
    maximumDate?: Date;
    style?: any;
};

export function ThemedCalendarInput({ value, onChange, minimumDate, maximumDate, style }: ThemedCalendarInputProps) {
    const [show, setShow] = React.useState(false);
    const color = useThemeColor({}, 'text');
    const borderColor = useThemeColor({}, 'border');
    const backgroundColor = useThemeColor({}, 'background');

    // Web: use native input
    if (Platform.OS === 'web') {
        return (
            <input
                type="date"
                value={value.toISOString().slice(0, 10)}
                onChange={e => {
                    const val = e.target.value;
                    onChange(new Date(val + 'T00:00:00'));
                }}
                style={{
                    padding: 10,
                    borderWidth: 1,
                    borderColor,
                    borderRadius: 6,
                    marginBottom: 8,
                    fontSize: 16,
                    color,
                    backgroundColor,
                    ...style,
                }}
            />
        );
    }

    // Native: use DateTimePicker
    return (
        <View>
            <Pressable
                onPress={() => setShow(true)}
                style={({ pressed }) => [
                    {
                        padding: 10,
                        borderWidth: 1,
                        borderColor,
                        borderRadius: 6,
                        marginBottom: 8,
                        backgroundColor: pressed ? '#eee' : backgroundColor,
                        alignItems: 'center',
                    },
                    style,
                ]}
                accessibilityRole="button"
                accessibilityLabel="Select date"
            >
                <Text style={{ fontSize: 16, color }}>{value.toISOString().slice(0, 10)}</Text>
            </Pressable>
            {show && (
                <DateTimePicker
                    value={value}
                    mode="date"
                    display="default"
                    onChange={(event, selectedDate) => {
                        setShow(Platform.OS === 'ios');
                        if (selectedDate) onChange(selectedDate);
                    }}
                    minimumDate={minimumDate}
                    maximumDate={maximumDate}
                />
            )}
        </View>
    );
}
