import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, Touchable, Alert } from "react-native";
import { Task } from "../../components/Task";

import { styles } from './style';


type taskType = {
  id: string,
  title: string,
  done: boolean,
  onPress?: (id: string) => void
  onRemove?: (id: string) => void
}

const EmptyList = () => {
  return (
    <View style={styles.emptyList}>
      <Image source={require('../../assets/Clipboard.png')} style={styles.emptyListImage} />
      <Text style={styles.emptyListText}>Você ainda não tem tarefas cadastradas</Text>
      <Text>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}

export function Home() {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<taskType[]>([
    {
      id: '1',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    },
    {
      id: '2',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    }
    ,
    {
      id: '3',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    },
    {
      id: '4',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    },
    {
      id: '5',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    },
    {
      id: '6',
      title: 'Integer urna interdum massa libero auctor neque turpis turpis semper.',
      done: false
    }
  ]);

  const [createdTasks, setCreatedTasks] = React.useState(6);
  const [doneTasks, setDoneTasks] = React.useState(0);

  function handleTaskDone(id: string) {
    const task = tasks.find(task => task.id === id);
    !task.done ? setDoneTasks(doneTasks + 1) : setDoneTasks(doneTasks - 1);
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  }

  function handleRemoveTask(id: string) {
    return Alert.alert('Remover', `Remover Tarefa?`, [
      { text: 'Não', style: 'cancel' },
      { text: 'Sim', onPress: () => RemoveTask(id) },
    ])

  }

  function RemoveTask(id: string) {
    setTasks(tasks.filter(task => task.id !== id));
    if (doneTasks > 0) { setDoneTasks(doneTasks - 1) }
    setCreatedTasks(createdTasks - 1);
  }

  function addNewTask() {

    if (newTask === '') {
      return;
    }

    setTasks([...tasks, {
      id: new Date().getTime().toString(),
      title: newTask,
      done: false
    }]);
    setNewTask('');
    setCreatedTasks(createdTasks + 1);
  }

  const renderItem = ({ item }) => (
    <Task title={item.title} done={item.done}
      onDone={() => handleTaskDone(item.id)}
      onRemove={() => handleRemoveTask(item.id)} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/Logo.png')} style={styles.logo} />
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="   Adicione uma nova tarefa"
            placeholderTextColor={"#808080"}
            onChangeText={setNewTask}
            value={newTask}
          ></TextInput>
          <TouchableOpacity style={styles.button} onPress={addNewTask}
            disabled={newTask === '' ? true : false}
          >
            <Image source={require('../../assets/plus.png')} style={styles.buttonPlusIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View style={styles.tasksHeader}>
          <Text style={styles.createdText}>Criadas {createdTasks} </Text>
          <Text style={styles.doneText}>Concluídas {doneTasks} </Text>
        </View>

        <View style={{ backgroundColor: '#808080', height: 1, marginLeft: 24, marginRight: 24 }}>
        </View>
      </View>

      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
} 