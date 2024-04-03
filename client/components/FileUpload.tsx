import { FC } from 'react';

interface FileUploadProps {
  file: any;
  setFile: Function;
}

const FileUpload: FC<FileUploadProps> = ({ file, setFile }) => {
  return (
    <div>
      <input type='file' />
    </div>
  );
};

export default FileUpload;
