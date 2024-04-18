import { useState } from "react";
import { ScrollView, TextInput, Button , Text , FlatList} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Task} from '../App';

const ViewTasks = ({navigation, route}: NativeStackScreenProps<RootStackParamList>) =>{

    const { params } = route;
    const tasks: Task[] = params as Task[] || [];

  const renderTask = ({ item }: { item: Task }) => (
    <Text>{item.name}</Text> 
  );

  return (
    <ScrollView>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title="+ TAREFA"
        onPress={() => navigation.navigate("RegisterTask")}
      />
    </ScrollView>
  );

}

export default ViewTasks;