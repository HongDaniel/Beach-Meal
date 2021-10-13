import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { BeachsideCycle } from '../mealCycle/BeachsideCycle.js';
import { AdMobBanner } from 'expo-ads-admob';

const Beachsidemenu = (props) => {
    const date = props.navigation.state.params['date'].format('MMM DD');
    const day = props.navigation.state.params['date'].format('dddd');
    const eachCycle = props.navigation.state.params['eachCycle'];
    console.log('props cycle: ' + props.navigation.state.params['cycle']);
    console.log('props day: ' + props.navigation.state.params['day']);

    function getBeachsideCycle(date) {
        const inputMonth = date.slice(0, 3);
        const inputDay = parseInt(date.slice(4));

        for (let i = 0; i < eachCycle.length; i++) {
            const month = eachCycle[i].slice(0, 3);
            const day = parseInt(eachCycle[i].slice(4));

            if (month === inputMonth) {
                // 월이 같을 경우
                if (inputDay < day) {
                    return (i + 2) % 5 === 0 ? 5 : (i + 2) % 5;
                } else {
                    if (i !== eachCycle.length - 1) {
                        if (eachCycle[i + 1].slice(0, 3) !== month) {
                            return (i + 3) % 5 === 0 ? 5 : (i + 3) % 5;
                        }
                    } else {
                        return (i + 3) % 5 === 0 ? 5 : (i + 3) % 5;
                    }
                }
            }
        }
    }
    const inputCycle = 'cycle' + getBeachsideCycle(date);
    console.log('Cycle: ' + inputCycle);
    console.log(day);
    // console.log(HillsideCycle[inputCycle][day]);
    const Breakfast = BeachsideCycle[inputCycle][day]['Breakfast'];
    const Lunch = BeachsideCycle[inputCycle][day]['Lunch'];
    const Dinner = BeachsideCycle[inputCycle][day]['Dinner'];
    const Brunch = BeachsideCycle[inputCycle][day]['Brunch'];

    return (
        <ScrollView>
            <View style={styles.container}>
                {day !== 'Saturday' && day !== 'Sunday' ? (
                    <View style={styles.box}>
                        <ScrollView>
                            <Text style={styles.title}>Breakfast</Text>
                            {Breakfast.map((el, idx) => {
                                return (
                                    <Text style={styles.menu} key={idx}>
                                        {el}
                                    </Text>
                                );
                            })}
                        </ScrollView>
                    </View>
                ) : null}
                {day !== 'Saturday' && day !== 'Sunday' ? (
                    <View style={styles.box}>
                        <ScrollView>
                            <Text style={styles.title}>Lunch</Text>
                            {Lunch.map((el, idx) => {
                                return (
                                    <Text style={styles.menu} key={idx}>
                                        {el}
                                    </Text>
                                );
                            })}
                        </ScrollView>
                    </View>
                ) : null}
                {day === 'Saturday' || day === 'Sunday' ? (
                    <View style={styles.box}>
                        <ScrollView>
                            <Text style={styles.title}>Brunch</Text>
                            {Brunch.map((el, idx) => {
                                return (
                                    <Text style={styles.menu} key={idx}>
                                        {el}
                                    </Text>
                                );
                            })}
                        </ScrollView>
                    </View>
                ) : null}
                <View style={styles.box}>
                    <ScrollView>
                        <Text style={styles.title}>Dinner</Text>
                        {Dinner.map((el, idx) => {
                            return (
                                <Text style={styles.menu} key={idx}>
                                    {el}
                                </Text>
                            );
                        })}
                    </ScrollView>
                </View>
                <AdMobBanner
                    adUnitID={'ca-app-pub-7362297965778148/9183063405'}
                    bannerSize="smartBanner"
                    servePersonalizedAds={true}
                    style={{
                        padding: 30,
                    }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
    },
    box: {
        width: 300,
        height: 300,
        backgroundColor: '#ffa502',
        marginVertical: 20,
        borderRadius: 15,
        padding: 15,
        overflow: 'scroll',
    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        color: '#fff',
        marginBottom: 15,
    },
    menu: {
        fontSize: 18,
        fontWeight: '800',
        color: '#fff',
        marginVertical: 7,
    },
});

export default Beachsidemenu;
