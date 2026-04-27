// import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Alert, Button, Platform } from 'react-native';
import { ThemedCalendarInput } from '../../components/themed-calendar-input';
import { ThemedInput } from '../../components/themed-input';
import { ThemedPicker } from '../../components/themed-picker';
import { ThemedText } from '../../components/themed-text';
import { ThemedView } from '../../components/themed-view';

const USERS = ['Gregor', 'Rada'];

export default function AddExpenseScreen() {
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [user, setUser] = useState(USERS[0]);

    const onChangeDate = (event: any, selectedDate?: Date) => {
        if (Platform.OS !== 'ios') setShowDatePicker(false);
        if (selectedDate) setDate(selectedDate);
    };

    const handleSubmit = () => {
        // Placeholder for API call
        const logMsg = `Date: ${date.toISOString().slice(0, 10)}\nDescription: ${description}\nPrice: €${price}\nUser: ${user}`;
        console.log('Expense Submitted:', logMsg);
        Alert.alert('Expense Submitted', logMsg);
    };

    return (
        <ThemedView style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
            <ThemedText style={{ fontSize: 24, marginBottom: 20 }}>Add Expense</ThemedText>
            <ThemedText>Date</ThemedText>
            <ThemedCalendarInput value={date} onChange={setDate} maximumDate={new Date(2100, 12, 31)} />
            <ThemedText>Description</ThemedText>
            <ThemedInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <ThemedText>Price (€)</ThemedText>
            <ThemedInput
                placeholder="0.00"
                value={price}
                onChangeText={setPrice}
                keyboardType="decimal-pad"
            />
            <ThemedText>Purchased by</ThemedText>
            <ThemedPicker
                selectedValue={user}
                onValueChange={setUser}
                items={USERS.map(u => ({ label: u, value: u }))}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </ThemedView>
    );
}
