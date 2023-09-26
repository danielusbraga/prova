import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import axios from 'axios';

const Usuario = ({ navigation }) => {
  const userId = navigation.getParam('userId');
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${userId}`).then((response) => {
      setUser(response.data);
    });
  }, [userId]);

  return (
    <View>
      {user && (
        <View>
          <Text>{user.name}</Text>
          <Text>Email: {user.email}</Text>
          <Button
            title="Ver Posts do Usuário"
            onPress={() => navigation.navigate('UserPosts', { userId })}
          />
        </View>
      )}
    </View>
  );
};

export default Usuario;