import {useMutation} from '@apollo/client';
import React from 'react';
import {gql} from '@apollo/client';
import {Text, View} from 'react-native';
import styles from './styles';
const UPDATE_TODO = gql`
  mutation UpdateTodo($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      id
      description
      done
    }
  }
`;

const UpdateTodo = ({id, done}) => {
  const [updateTodo] = useMutation(UPDATE_TODO);

  const toggleStatus = () => {
    updateTodo({
      variables: {input: {id, done: !done}},
    });
  };

  return (
    <Text style={styles.itemsStylebutton} onPress={toggleStatus}>
      Toggle Status: {done ? 'In Progress' : 'Done'}
    </Text>
  );
};
export default UpdateTodo;
