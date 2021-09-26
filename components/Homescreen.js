import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';

const Homescreen = (props) => {
    const { navigate } = props.navigation;
    const [selectedDate, setselectedDate] = useState('');
    console.log(selectedDate);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>CHOOSE DATE</Text>
            <CalendarStrip
                style={styles.calendar}
                scrollable
                scrollerPaging
                daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#eee' }}
                calendarColor={'#ffdd59'}
                calendarHeaderStyle={{ color: 'black', fontSize: 20, paddingBottom: 15 }}
                dateNumberStyle={{ color: 'black', fontSize: 16 }}
                dateNameStyle={{ color: 'black', fontSize: 12 }}
                iconContainer={{ flex: 0.05 }}
                onDateSelected={(date) => setselectedDate(date.format('YYYY-MM-DD'))}
            />
            <View style={styles.villages}>
                <TouchableOpacity style={styles.parkside} onPress={() => navigate('Parksidemenu', { date: selectedDate })}>
                    Parkside
                </TouchableOpacity>

                <TouchableOpacity style={styles.hillside} onPress={() => navigate('Hillsidemenu', { date: selectedDate })}>
                    Hillside
                </TouchableOpacity>

                <TouchableOpacity style={styles.beachside} onPress={() => navigate('Beachsidemenu', { date: selectedDate })}>
                    Beachside
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Homescreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 35,
        fontWeight: 500,
        marginHorizontal: 30,
        marginTop: 30,
        marginBottom: 15,
    },
    calendar: {
        marginBottom: 12,
        height: 100,
        paddingTop: 20,
        paddingBottom: 10,
        fontSize: 18,
    },
    villages: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    parkside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#7bed9f',
        fontSize: 30,
        marginBottom: 20,
    },
    hillside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#1e90ff',
        fontSize: 30,
        marginBottom: 20,
    },
    beachside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#eccc68',
        fontSize: 30,
    },
});
