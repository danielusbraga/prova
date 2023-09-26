import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const Listausuario = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  return (
    <View>
      {users.map((user) => (
        <View key={user.id}>
          <Text>{user.name}</Text>
          <Button
            title="Ver Perfil"
            onPress={() => navigation.navigate('UserProfile', { userId: user.id })}
          />
        </View>
      ))}
    </View>
  );
};

export default Listausuario;