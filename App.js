import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // 모달의 렌더링 상태를 나타내는 변수
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [todoGoals, setTodoGoals] = useState([]);

  // 버튼을 누르면 할 일 목록을 추가하는 함수
  const addGoalHandler = (enteredGoalText) => {
    // setTodoGoals([...todoGoals, enteredGoalText]);
    // useState setter 메서드의 스냅샷 방식
    // 콜백 함수의 매개값은 해당 상태 변수의 최신 값이 전달됨
    setTodoGoals((currentTodoGoals) => [
      ...currentTodoGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    // 추가 후에 모달 창 닫히도록 처리
    endAddGoalHandler();
  };
  const deleteGoalHandler = (id) => {
    setTodoGoals((currentTodoGoals) => {
      return currentTodoGoals.filter((goal) => {
        return goal.id !== id;
      });
    });
  };

  // 할 일 추가 모달을 띄워주는 함수
  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button
          title='할 일을 추가하려면 누르세요!'
          color='#5e0acc'
          onPress={startAddGoalHandler}
        />
        {/*
       ModalIsVisible &&(조건부 렌더링)을 직접 작성할 필요 없이
       GoalInput의 Modal에 visible props를 이용하면 된다.
      */}
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={todoGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 4,
  },
});
