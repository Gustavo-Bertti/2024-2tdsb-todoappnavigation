import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';



import RegisterTask from './components/RegistrarTarefa';
import ViewTasks from './components/ViewTarefa';

export type Task = {
    name : string
    createdAt : Date
    isFinished : Boolean
    
};

export type RootStackParamList = {
    RegisterTask: undefined;
    ViewTasks?: {tasks: Array<Task>};
  };



const Stack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
return(
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="RegisterTask" component={RegisterTask} />
        <Stack.Screen name="ViewTasks" component={ViewTasks}/>  
    </Stack.Navigator>
  </NavigationContainer>
);
    

};

export default App;
