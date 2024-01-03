import {View, Text} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {useQuery, gql} from '@apollo/client';
import styles from './styles';
import UpdateTodo from './updateTodo';
const GET_TODOS = gql`
  query Todos {
    todos {
      id
      description
      done
    }
  }
`;

const TodoList = ({navigation}) => {
  const {loading, error, data} = useQuery(GET_TODOS);

  const renderItem = ({item, index}) => {
    console.log('item:', item);
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.itemsStyle}>ID: {item.id}</Text>
        <Text style={styles.itemsStyle}>Description: {item.description}</Text>
        <UpdateTodo id={item.id} done={item.done} />
      </View>
    );
  };

  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList
        data={data.todos}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TodoList;
