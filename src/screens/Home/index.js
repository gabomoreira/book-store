import React from 'react';
import {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {COLORS, FONTS, SIZES} from '../../constants/theme';
import {icons} from '../../constants';
import {Header} from './Header';

const profileData = {
  name: 'Gabriel Moreira',
  points: 790,
};

export const Home = () => {
  const [profile, setProfile] = useState(profileData);
  console.log(profile);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Header Section */}
      <View style={{height: 200}}>
        <Header profile={profile} />
      </View>
    </SafeAreaView>
  );
};
