import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../../constants';
import {icons} from '../../../constants';

export const Header = ({profile}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        alignItems: 'center',
      }}>
      {/* Greetings */}
      <View style={{flex: 1}}>
        <View>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Bom dia</Text>
          <Text style={{...FONTS.h2, color: COLORS.white}}>{profile.name}</Text>
        </View>
      </View>

      {/* Points */}
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          height: 40,
          paddingLeft: 3,
          paddingRight: SIZES.radius,
          borderRadius: 20,
        }}
        onPress={() => console.log('Point')}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}>
            <Image
              source={icons.plus_icon}
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
          </View>
          <Text
            style={{
              color: COLORS.white,
              marginLeft: SIZES.base,
              ...FONTS.body4,
            }}>
            {profile.points} pontos
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
