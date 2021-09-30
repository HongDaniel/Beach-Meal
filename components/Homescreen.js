import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
const Homescreen = (props) => {
    const { navigate } = props.navigation;
    const [selectedDate, setselectedDate] = useState(moment());

    const setDate = (date) => {
        console.log(date.format('MMM Do YY'));
        setselectedDate(date);
    };
    return (
        <View style={styles.container}>
            {console.log(moment())}
            {console.log('selected : ' + selectedDate)}
            {/* {console.log(getSelectedDate())} */}

            <Text style={styles.text}>CHOOSE DATE</Text>
            <CalendarStrip
                style={styles.calendar}
                startingDate={moment().subtract(3, 'd')}
                minDate={moment().subtract(3, 'd')} // 오늘날짜 -3
                maxDate={'2021-12-12'} // 종강날짜 : 12월 12일
                scrollable
                daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#95afc0' }}
                calendarColor={'#22a6b3'}
                calendarHeaderStyle={{ color: 'white', fontSize: 20, paddingBottom: 15 }}
                dateNumberStyle={{ color: 'white', fontSize: 16 }}
                dateNameStyle={{ color: 'white', fontSize: 12 }}
                iconContainer={{ flex: 0.05 }}
                onDateSelected={(date) => setDate(date)}
            />
            <View style={styles.villages}>
                <TouchableOpacity style={styles.parkside} onPress={() => navigate('Parksidemenu', { date: selectedDate })}>
                    <Text style={{ fontSize: 30 }}>Parkside</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hillside} onPress={() => navigate('Hillsidemenu', { date: selectedDate })}>
                    <Text style={{ fontSize: 30 }}>Hillside</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.beachside} onPress={() => navigate('Beachsidemenu', { date: selectedDate })}>
                    <Text style={{ fontSize: 30 }}>Beachside</Text>
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
        marginBottom: 20,
    },
    hillside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#1e90ff',
        marginBottom: 20,
    },
    beachside: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 150,
        borderRadius: 15,
        backgroundColor: '#eccc68',
    },
});
