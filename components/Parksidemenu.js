import React from 'react';
import { ParksideCycle } from '../mealCycle/ParksideCycle';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Parksidemenu = (props) => {
    const date = props.navigation.state.params['date'].format('MMM DD');
    const day = props.navigation.state.params['date'].format('dddd');
    function getParksideCycle(date) {
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
            'Nov 22',
            'Nov 29',
            'Dec 6',
        ];
        const inputMonth = date.slice(0, 3);
        const inputDay = parseInt(date.slice(4));

        for (let i = 0; i < eachCycle.length - 1; i++) {
            const month = eachCycle[i].slice(0, 3);
            const day = parseInt(eachCycle[i].slice(4));

            if (month === inputMonth) {
                // 월이 같을 경우
                if (inputDay < day) {
                    return i % 5 === 0 ? 5 : i % 5;
                    // return i;
                } else {
                    if (eachCycle[i + 1].slice(0, 3) !== month) {
                        // return i;
                        return (i + 1) % 5 === 0 ? 5 : (i + 1) % 5;
                    }
                }
            }
        }
    }
    // console.log('cycle: ' + getCycle(date));
    const inputCycle = 'cycle' + getParksideCycle(date);
    // console.log(typeof inputCycle);
    console.log(day);
    console.log(ParksideCycle[inputCycle][day]);
    const Breakfast = ParksideCycle[inputCycle][day]['Breakfast'];
    const Lunch = ParksideCycle[inputCycle][day]['Lunch'];
    const Dinner = ParksideCycle[inputCycle][day]['Dinner'];
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.title}>Breakfast</Text>
                {Breakfast.map((el, idx) => {
                    return (
                        <Text style={styles.menu} key={idx}>
                            {el}
                        </Text>
                    );
                })}
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Lunch</Text>
                {Lunch.map((el, idx) => {
                    return (
                        <Text style={styles.menu} key={idx}>
                            {el}
                        </Text>
                    );
                })}
            </View>
            <View style={styles.box}>
                <Text style={styles.title}>Dinner</Text>
                {Dinner.map((el, idx) => {
                    return (
                        <Text style={styles.menu} key={idx}>
                            {el}
                        </Text>
                    );
                })}
            </View>
        </View>
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
        backgroundColor: '#7bed9f',
        marginVertical: 20,
        borderRadius: 15,
        padding: 15,
        overflow: 'scroll',
    },
    title: {
        fontSize: 25,
        fontWeight: '800',
        color: '#dff9fb',
        marginBottom: 15,
    },
    menu: {
        fontSize: 18,
        fontWeight: '800',
        color: '#dff9fb',
        marginVertical: 7,
    },
});
export default Parksidemenu;
