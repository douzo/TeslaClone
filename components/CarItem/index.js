import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

import StyledButton from '../StyledButton';

const CarItem = (props) => {
    const {name, tagline, image, taglineCTA } = props.car;
    return (

    <View style={styles.carContainer}>
        <ImageBackground source={image} style={styles.image}></ImageBackground>
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>
              {tagline}
              {' '}
            <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
          </Text>
        </View>

        <View style={styles.buttonContainer}>
            <StyledButton type='primary' textInsideButton={'Custom Order'}
            onPress={() => {
                console.warn('Custom Order is pressed')
            }}></StyledButton>
            <StyledButton type='secondary' textInsideButton={'Existing Inventories'}
            onPress={() => {
                console.warn('Existing Inventories is pressed')
            }}></StyledButton>
        </View>
    </View>
    );
}

export default CarItem;