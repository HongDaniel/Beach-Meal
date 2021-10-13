import React from 'react';
import { ParksideCycle } from '../mealCycle/ParksideCycle';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

const Parksidemenu = (props) => {
    const date = props.navigation.state.params['date'].format('MMM DD');
    const day = props.navigation.state.params['date'].format('dddd');
    const eachCycle = props.navigation.state.params['eachCycle'];
    console.log('props cycle: ' + props.navigation.state.params['cycle']);
    console.log('props day: ' + props.navigation.state.params['day']);

    function getParksideCycle(date) {
        const inputMonth = date.slice(0, 3);
        const inputDay = parseInt(date.slice(4));

        for (let i = 0; i < eachCycle.length; i++) {
            const month = eachCycle[i].slice(0, 3);
            const day = parseInt(eachCycle[i].slice(4));
            if (month === inputMonth) {
                // 월이 같을 경우
                if (inputDay < day) {
                    return i % 5 === 0 ? 5 : i % 5;
                    // return i;
                } else {
                    if (i !== eachCycle.length - 1) {
                        if (eachCycle[i + 1].slice(0, 3) !== month) {
                            return (i + 1) % 5 === 0 ? 5 : (i + 1) % 5;
                        }
                    } else {
                        return (i + 1) % 5 === 0 ? 5 : (i + 1) % 5;
                    }
                }
            }
        }
    }
    // console.log('cycle: ' + getCycle(date));
    const inputCycle = 'cycle' + getParksideCycle(date);
    console.log('Cycle: ' + inputCycle);
    console.log(day);
    // console.log(ParksideCycle[inputCycle][day]);
    const Breakfast = ParksideCycle[inputCycle][day]['Breakfast'];
    const Lunch = ParksideCycle[inputCycle][day]['Lunch'];
    const Brunch = ParksideCycle[inputCycle][day]['Brunch'];
    const Dinner = ParksideCycle[inputCycle][day]['Dinner'];
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
        backgroundColor: '#6ab04c',
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
export default Parksidemenu;
