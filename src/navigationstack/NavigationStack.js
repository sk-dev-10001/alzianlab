import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TodoList from '../screens/todoList';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
const client = new ApolloClient({
  uri: 'https://api.mocki.io/v2/c4d7a195/graphql',
  cache: new InMemoryCache(),
});
const NavigationStackScreenList = () => {
  const Stack = createStackNavigator();
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="todo" component={TodoList} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default NavigationStackScreenList;
