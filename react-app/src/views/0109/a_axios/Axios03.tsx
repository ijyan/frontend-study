import React, { useEffect, useState } from 'react';
import {
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  TextField,
} from '@mui/material';
import axios from 'axios';

// ! posts 데이터 생성, 조회, 수정, 삭제
const API_URL = 'http://localhost:5000/posts';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function Axios03() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editPostId, setEditPostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>(API_URL);
        setPosts(response.data);
      } catch (e) {
        console.log('Error fetching posts', e);
      }
    };
    fetchPosts();
  }, []);

  const generatedId = () => {
    return posts.length > 0 ? Math.max(...posts.map((post) => post.id)) + 1 : 1;
  };

  const savePost = async () => {
    if (!newPost.title || !newPost.content) return;

    try {
      let updatedPost: Post;
      if (editPostId === null) {
        const newId = generatedId();
        const response = await axios.post<Post>(API_URL, {
          id: newId,
          ...newPost,
        });
        updatedPost = response.data;
      } else {
        const response = await axios.put<Post>(
          `${API_URL}/${editPostId}`,
          newPost,
        );
        updatedPost = response.data;
        setEditPostId(null);
      }

      if (updatedPost) {
        setPosts((prevPosts) => {
          const updatedPosts = prevPosts.filter(
            (post) => post.id !== updatedPost.id,
          );
          return [...updatedPosts, updatedPost];
        });
      }
      setNewPost({ title: '', content: '' });
    } catch (e) {
      console.log('Error Saving Posts', e);
    }
  };

  const handleEditPost = async (post: Post) => {
    setNewPost({ title: post.title, content: post.content });
    setEditPostId(post.id);
  };
  const handleDeletePost = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <TextField
        label="Post Title"
        value={newPost.title}
        onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Post Content"
        value={newPost.content}
        onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button onClick={savePost} variant="contained" color="primary">
        {editPostId === null ? 'Create Post' : 'Update Post'}
      </Button>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <ListItemText primary={post.title} secondary={post.content} />
            <Button onClick={() => handleEditPost(post)} color="primary">
              Edit
            </Button>
            <Button onClick={() => handleDeletePost(post.id)} color="secondary">
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
