import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';

import { Button, Input } from '@reactoso-ui';
import 'react-quill/dist/quill.snow.css';
import './style.scss';

export default function Editor({ onSubmit, model }): JSX.Element {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, false] }],
      [{ size: [] }],
      [{ font: [] }],
      [{ color: [] }],
      [{ background: [] }],
      [{ align: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '+1' }, { indent: '-1' }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      ['code-block', 'link', 'image', 'video'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  useEffect(() => {
    setTitle(model?.title || '');
    setDescription(model?.description || '');
  }, [model]);

  const handleOnTitleChange = (e) => setTitle(e.target.value);
  const handleOnDescriptionChange = (e) => setDescription(e);
  const handleSubmit = () => {
    if (title?.trim()) {
      onSubmit({
        title: title?.trim(),
        description,
      });
    }
  };
  return (
    <div className="editor">
      <div>
        <h4>Title</h4>
        <Input value={title} onChange={handleOnTitleChange} />
      </div>
      <div>
        <h4>Note</h4>
        <ReactQuill
          onChange={handleOnDescriptionChange}
          theme="snow"
          value={description}
          modules={modules}
          formats={formats}
        ></ReactQuill>
      </div>
      <div>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </div>
  );
}
