import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TouchableHighlight } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; 
import { useTranslation } from 'react-i18next';
import '../Language/language'; 

const MainHeader = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [pickerDisplayed, setPickerDisplayed] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    setPickerDisplayed(false);
  };

  const togglePicker = () => {
    setPickerDisplayed(!pickerDisplayed);
  };

  const languages = [
    { title: 'English', value: 'en' },
    { title: 'தமிழ் (Tamil)', value: 'ta' },
    { title: 'हिन्दी (Hindi)', value: 'hi' }
  ];

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.userContainer}>
        <View style={styles.circle}>
          <FontAwesome5 name="user" size={24} color="#fff" />
        </View>
        <Text style={styles.userName}>Ragu</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={togglePicker} style={styles.languageButton}>
        <Text style={styles.languageText}>{languages.find(lang => lang.value === selectedLanguage)?.title || 'Select language'}</Text>
        <FontAwesome5 name="caret-down" size={16} color="#fff" style={styles.dropdownIcon} />
      </TouchableOpacity>

      <Modal visible={pickerDisplayed} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Please pick a language</Text>
          {languages.map((lang, index) => (
            <TouchableHighlight
              key={index}
              onPress={() => changeLanguage(lang.value)}
              style={styles.modalOption}
            >
              <Text>{lang.title}</Text>
            </TouchableHighlight>
          ))}
          <TouchableHighlight onPress={togglePicker} style={styles.modalOption}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 120,
    backgroundColor: '#10B981', 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomRightRadius:25,
    borderBottomLeftRadius:25,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  userName: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
  languageButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    borderRadius: 20, 
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
  },
  dropdownIcon: {
    marginLeft: 5,
  },
  modalContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalOption: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#999',
    textAlign: 'center',
  },
});

export default MainHeader;
