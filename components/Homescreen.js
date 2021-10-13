import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import { AdMobBanner } from 'expo-ads-admob';

const Homescreen = (props) => {
    const { navigate } = props.navigation;
    const [selectedDate, setselectedDate] = useState(moment());
    const [saturday, setSaturday] = useState(false);
    const [sunday, setSunday] = useState(false);
    let cycle = [];
    let day = '';
    const eachCycle = [
        'Aug 23',
        'Aug 30',
        'Sep 6',
        'Sep 13',
        'Sep 20',
        'Sep 27',
        'Oct 4',
        'Oct 11',
        'Oct 18',
        'Oct 25',
        'Nov 1',
        'Nov 8',
        'Nov 15',
        'Nov 29',
        'Dec 6',
    ];
    const setDate = (date) => {
        // console.log(date.format('MMM DD'));
        // day = date.format('dddd');
        setselectedDate(date);
        if (day === 'Saturday') {
            setSaturday(true);
            setSunday(false);
        } else if (day === 'Sunday') {
            setSaturday(false);
            setSunday(true);
        } else {
            setSaturday(false);
            setSunday(false);
        }
    };
    return (
        <View style={styles.container}>
            {/* {console.log(moment())} */}
            {/* {console.log('selected : ' + selectedDate)} */}

            <Text style={styles.text}>CHOOSE DATE</Text>
            <CalendarStrip
                style={styles.calendar}
                startingDate={moment().subtract(3, 'd')}
                minDate={moment().subtract(3, 'd')} // 오늘날짜 -3
                maxDate={'2021-12-12'} // 종강날짜 : 12월 12일
                scrollable
                selectedDate={moment()}
                daySelectionAnimation={{ type: 'background', duration: 200, highlightColor: '#ffeaa7' }}
                calendarColor={'#f9ca24'}
                calendarHeaderStyle={{ color: 'white', fontSize: 20, paddingBottom: 15 }}
                dateNumberStyle={{ color: 'white', fontSize: 16 }}
                dateNameStyle={{ color: 'white', fontSize: 12 }}
                iconContainer={{ flex: 0.08 }}
                onDateSelected={(date) => setDate(date)}
            />
            <View style={styles.villages}>
                {saturday ? null : (
                    <TouchableOpacity
                        style={[styles.whichSide, { backgroundColor: '#6ab04c' }]}
                        onPress={() => navigate('Parksidemenu', { date: selectedDate, eachCycle: eachCycle })}
                    >
                        <Text style={styles.boxText}>Parkside</Text>
                        <Image source={require('../images/park.png')} style={[styles.boxPic, { bottom: 5 }]}></Image>
                    </TouchableOpacity>
                )}

                {sunday ? null : (
                    <TouchableOpacity
                        style={[styles.whichSide, { backgroundColor: '#1e90ff' }]}
                        onPress={() => navigate('Hillsidemenu', { date: selectedDate, eachCycle: eachCycle })}
                    >
                        <Text style={styles.boxText}>Hillside</Text>
                        <Image source={require('../images/hill.png')} style={[styles.boxPic, { bottom: 10 }]}></Image>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={[styles.whichSide, { backgroundColor: '#ffa502' }]}
                    onPress={() => navigate('Beachsidemenu', { date: selectedDate, eachCycle: eachCycle })}
                >
                    <Text style={styles.boxText}>Beachside</Text>
                    <Image source={require('../images/beach.png')} style={[styles.boxPic, { bottom: 10 }]}></Image>
                </TouchableOpacity>
                <AdMobBanner
                    adUnitID={'ca-app-pub-7362297965778148/9183063405'}
                    bannerSize="smartBanner"
                    servePersonalizedAds={true}
                    style={{
                        padding: 30,
                    }}
                />
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
        fontWeight: '500',
        marginHorizontal: 20,
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
    whichSide: {
        justifyContent: 'space-between',
        // alignItems: 'center',
        width: 250,
        height: 150,
        zIndex: 1,
        borderRadius: 15,
        marginBottom: 20,
    },
    boxText: {
        fontSize: 30,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 12,
        marginTop: 12,
    },
    boxPic: { width: 100, height: 100, zIndex: 3, left: 140 },
});
