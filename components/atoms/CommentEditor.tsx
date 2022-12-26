import React, { FC } from 'react';

import dynamic from 'next/dynamic';

// import ReactQuill from 'react-quill';

export interface ICommentEditorProps {
  value: string
  setValue: (value: string) => void
}
const DynamicComponentWithNoSSR = dynamic(
  async () => import('react-quill'),
  { ssr: false, loading: () => <p>Loading...</p> },
);
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
    ],
    ['link'],
    ['clean'],
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
  'link',
];

const CommentEditor: FC<ICommentEditorProps> = ({ value, setValue }) => {
  return (
    <DynamicComponentWithNoSSR
      theme="snow"
      value={value}
      onChange={setValue}
      className="bg-white overflow-y-hidden w-full"
      modules={modules}
      formats={formats}
    />
  );
};
export default CommentEditor;
