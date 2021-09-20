import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';

const App = () => {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (e) {
      console.log(e);
    }
  }

  if (!confirm) {
    return (
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+79268812629')}
      />
    );
  }

  return (
    <>
      <TextInput
        style={{backgroundColor: 'red'}}
        value={code}
        onChangeText={text => setCode(text)}
      />
      <Button title="Confirm Code" onPress={confirmCode} />
    </>
  );
};

export default App;
