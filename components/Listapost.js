import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const UserPostsScreen = ({ navigation }) => {
  const userId = navigation.getParam('userId');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get(`https://dummyjson.com/users/${userId}/posts`).then((response) => {
      setPosts(response.data);
    });
  }, [userId]);

  return (
    <View>
      {posts.map((post) => (
        <View key={post.id}>
          <Text>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
};

export default Listapost;