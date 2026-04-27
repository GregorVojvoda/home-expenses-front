import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface NavbarProps {
    title?: string;
}

const Navbar: React.FC<NavbarProps> = ({ title = 'Home Expenses' }) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.navbar}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#FAFBFC',
    },
    navbar: {
        height: 70,
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: '#FAFBFC',
        justifyContent: 'center',
        // Neumorphic effect - soft inset shadow
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 8,
        elevation: 3,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#2C3E50',
        letterSpacing: 0.5,
    },
});

export default Navbar;
