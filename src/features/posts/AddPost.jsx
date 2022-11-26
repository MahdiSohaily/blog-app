import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersSlice';

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState();
  const [content, setContent] = useState();
  const [status, setStatus] = useState('ideal');

  const dispatch = useDispatch();

  const authors = useSelector(selectAllUsers);
  const options = authors.map((item) => (
    <option key={item.id} value={item.id}>
      {item.firstName}
    </option>
  ));

  const handleSave = () => {
    return [title, author, content].every(Boolean) && 'ideal' === status;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
        />
        <label htmlFor="postAuthor">Author:</label>
        <select
          id="postAuthor"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value=""></option>
          {options}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button type="button" disabled={!handleSave()}>
          Save Post
        </button>
      </form>
    </section>
  );
}
