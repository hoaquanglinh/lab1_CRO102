import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TextInputLayout from './TextInputLayout';
import TextInputLayoutError from './TextInputLayoutError';
const TextInput = () => {
    const [text1, setText1] = useState('');
    const [text2, setText2] = useState('');
    const [text3, setText3] = useState('');
    const [error, setError] = useState('');
  
    const handleTextChange1 = (text) => {
        setText1(text);
      };
    
      const handleTextChange2 = (text) => {
        setText2(text);
      };
      const handleTextChange3 = (text) => {
        setText3(text);
      };

      const handleTextChangeError = (text) => {
        setText3(text);
        if (!text) {
          setError('Vui lòng nhập thông tin');
        } else {      
          setError('');
        }
      };
    

  return (
    <View style={styles.container}>
      <TextInputLayout
        label="Label 1"
        placeholder="Nhập thông tin"
        onChangeText={handleTextChange1}
        value={text1}
      />
      <TextInputLayout
        label="Label 2"
        placeholder="Nhập thông tin"
        onChangeText={handleTextChange2}
        value={text2}
      />
      <TextInputLayoutError
        label="Label"
        placeholder="Nhập thông tin"
        onChangeText={handleTextChangeError}
        value={text3}
        errorMessage={error}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default TextInput;
