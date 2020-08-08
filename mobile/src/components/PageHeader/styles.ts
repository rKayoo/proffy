import React from 'react'
import { StyleSheet } from 'react-native';
import StudyTabs from '../../routes/StudyTabs';
import { ScaleFromCenterAndroid } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/TransitionPresets';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257E5'
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40
  }
});

export default styles;