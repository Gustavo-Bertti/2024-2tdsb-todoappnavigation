import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Task } from '../App';

type ViewTasksProps = NativeStackScreenProps<RootStackParamList, 'ViewTasks'>;

const ViewTasks: React.FC<ViewTasksProps> = ({ navigation, route }) => {
  const { params } = route;
  const tasks: Task[] = params?.tasks || [];

  const renderTask = ({ item }: { item: Task }) => (
    <View>
      <Text>Nome: {item.name}</Text>
      <Text>Concluída: {item.isFinished ? 'Sim' : 'Não'}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="+ TAREFA"
        onPress={() => navigation.navigate("RegisterTask")}
      />
    </View>
  );
}

export default ViewTasks;
