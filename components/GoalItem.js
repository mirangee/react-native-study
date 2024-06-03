import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

const GoalItem = ({ text, onDeleteItem, id }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={() => onDeleteItem(id)}
        // Pressable 컴포넌트의 조건부 스타일 렌더링
        // press 이벤트가 발생할 때마다 style 적용을 위해 전달한 함수를 호출
        // pressData로 이벤트 관련 정보 전달
        // 현재 이벤트가 pressed된 게 맞다면 style.pressedItem 적용
        // ios에서 press 이벤트 스타일 처리 방식
        style={(pressData) => pressData.pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}> {text} </Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
});
