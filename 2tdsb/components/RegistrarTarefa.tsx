import { useState } from "react";
import { View, TextInput, Button , Text } from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Task} from '../App';

const RegisterTask = ({navigation}: NativeStackScreenProps<RootStackParamList>) =>{
    
   

    const Situacao = () =>{
        setIsFinished(true); 
    }
    const Add = () =>{
     const newTask : Task ={
        name : name,
        createdAt : new Date(),
        isFinished: isFinished
     } ;
     setTasks([...tasks, newTask]);
    setName("")
    } 

    const [tasks, setTasks] = useState<Task[]>([]);
    const [name, setName] = useState<string>("");
    const[isFinished, setIsFinished] = useState<boolean>(false);


    return(
        <View>
            <Text>Digite o nome da tarefa:</Text>
            <TextInput onChangeText={setName} value={name} />
            <Button onPress={Situacao} title="Completo"/>

            <Button onPress={Add} title="Adicionar a tarefa"/>
            <Button title="Registro de tarefas" onPress={() => navigation.navigate('ViewTasks')} />
        </View>
    );
};

export default RegisterTask;