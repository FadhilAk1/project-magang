import React from 'react';
import { useParams } from 'react-router-dom';

const DocumentView = ({ fileUrl }) => {

  return (
    <div>
      <h1>File Viewer</h1>
      <iframe src={fileUrl} width="100%" height="500px" title="File Viewer"></iframe>
    </div>
  );
};

export default DocumentView;
