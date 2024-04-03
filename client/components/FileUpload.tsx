import { ChangeEvent, FC, useRef } from 'react';

interface FileUploadProps {
  setFile: Function;
  accept: string;
}

const FileUpload: FC<FileUploadProps> = ({ setFile, accept, children }) => {
  const ref = useRef<HTMLInputElement>();

  const onInputClickHandler = () => {
    ref.current.click();
  };

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files[0]);
  };

  return (
    <div onClick={onInputClickHandler}>
      <input
        type='file'
        accept={accept}
        style={{ display: 'none' }}
        ref={ref}
        onChange={onInputChangeHandler}
      />
      {children}
    </div>
  );
};

export default FileUpload;
