import { useState } from "react";
import { ScrollView, TextInput, Button , Text , FlatList} from "react-native";
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList, Task} from '../App';

const ViewTasks = ({navigation, route}: NativeStackScreenProps<RootStackParamList>) =>{

    const {params} = route;
    const tasks = params;

    return(
        <ScrollView>
            

            
        </ScrollView>
    );

}

export default ViewTasks;