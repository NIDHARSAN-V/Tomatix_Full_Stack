import React from 'react';
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView, RefreshControl, StyleSheet } from 'react-native';
import useWeatherForecast from '../hooks/useWeatherForecast';
import { useTranslation } from 'react-i18next';
import '../Components/Language/language';

const WeatherForecast = () => {
    const { forecast, futureWeather, loading, refreshing, loadForecast, errorMessage } = useWeatherForecast();
    const { t } = useTranslation();

    if (loading) {
        return (
            <SafeAreaView style={styles.loading}>
                <ActivityIndicator size="large" />
            </SafeAreaView>
        );
    }

    if (errorMessage) {
        return (
            <SafeAreaView style={styles.loading}>
                <Text>{errorMessage}</Text>
            </SafeAreaView>
        );
    }

    if (!forecast) {
        return (
            <SafeAreaView style={styles.loading}>
                <Text>{t('unable')}</Text>
            </SafeAreaView>
        );
    }

    const current = forecast.current;
    const location = forecast.location;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={loadForecast}
                    />
                }
                contentContainerStyle={styles.scrollContainer}
            >
                <Text style={styles.title}>{t('weatherCondition')}</Text>
                <Text style={styles.locationText}>
                    {t('yourLocation')}: {location.name}, {location.region}
                </Text>
                <View style={styles.weatherContainer}>
                    <Text style={styles.weatherText}>{t('weatherCondition')}: {current.condition.text}</Text>
                    <Text style={styles.weatherText}>{t('temperature')}: {current.temp_c}°C</Text>
                </View>

                {/* Future Weather Section with ScrollView */}
                <View style={styles.futureContainer}>
                    <Text style={styles.futureTitle}>{t('7DayForecast')}</Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {futureWeather.map((day, index) => (
                            <View key={index} style={styles.futureWeatherCard}>
                                <Text style={styles.dateText}>{day.date}</Text>
                                <Text style={styles.futureTempText}>Avg Temp: {day.day.avgtemp_c}°C</Text>
                                <Text style={styles.conditionText}>{day.day.condition.text}</Text>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            {/* Add space above the tab navigator */}
            <View style={styles.bottomSpacer} />
        </SafeAreaView>
    );
};

// Styles for the component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 80, // Additional space to avoid overlapping
    },
    title: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: '#C84B31',
        marginBottom: 20,
    },
    locationText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    weatherContainer: {
        margin: 20,
        padding: 30,
        backgroundColor: '#f0f8ff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    weatherText: {
        fontSize: 20,
        color: '#333',
        marginBottom: 10,
        textAlign: 'center',
    },
    futureContainer: {
        marginTop: 20,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: '#f0f8ff',
        padding: 15,
    },
    futureTitle: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#C84B31',
        marginBottom: 10,
    },
    futureWeatherCard: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        minWidth: 150, // Minimum width for cards
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    futureTempText: {
        fontSize: 14,
        marginTop: 5,
        color: '#555',
    },
    conditionText: {
        fontSize: 14,
        color: '#555',
    },
    bottomSpacer: {
        height: 80, // Adjust this height to provide space above the tab navigator
    },
});

export default WeatherForecast;
