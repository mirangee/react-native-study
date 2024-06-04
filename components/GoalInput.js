import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet, Modal } from 'react-native';

const GoalInput = ({ visible, onAddGoal, onCancel }) => {
  // 입력창의 상태를 관리하는 변수를 React에서 사용하는 useState 훅을 활용하여 선언
  const [enteredGoalText, setEnteredGoalText] = useState('');

  // 사용자가 내용을 입력할 때 해당 입력값을 가져오는 함수
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    // 조건부 렌더링을 직접 구현하지 않고 Modal의 visible props를 활용해서
    // 모달을 열고 닫을 수 있음
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder='할 일을 입력하세요'
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title='할 일 추가하기'
              color='#b180f0'
              onPress={addGoalHandler}
            />
          </View>
          <View style={styles.button}>
            <Button title='취소' color='#f31282' onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});
