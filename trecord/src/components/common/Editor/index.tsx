import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import 'react-quill/dist/quill.snow.css';
import Quill from 'quill';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 85vh;

  .ql-toolbar {
    border: 1px solid #e9e9e9;
    border-right: none;
    border-left: none;
    display: inline-flex;
    justify-content: end;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 1;
    height: 42px;
  }

  .ql-container {
    border: none;
    padding-top: 42px;
  }

  .ql-editor::before {
    color: var(--gray-600, #999);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
  }
`;

const Editor = ({
  contentSetter: setContent,
}: {
  contentSetter: React.Dispatch<React.SetStateAction<string>>;
}): ReactElement => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [quill, setQuill] = useState<Quill | null>(null);

  const handleTextChange = useCallback(() => {
    setContent(editorRef.current?.querySelector('.ql-editor')?.innerHTML ?? '');
  }, [editorRef.current?.querySelector('.ql-editor')?.innerHTML]);

  useEffect(() => {
    if (editorRef.current) {
      const quillInstance = new Quill(editorRef.current, {
        theme: 'snow',
        placeholder: '당신만의 여행 기록을 남겨보세요!',
        modules: {
          toolbar: [['image']],
        },
      });

      setQuill(quillInstance);

      quillInstance.on('text-change', handleTextChange);
    }

    return () => {
      if (quill) {
        quill.off('text-change', handleTextChange);
      }
    };
  }, []);

  return (
    <StyledContainer>
      <div ref={editorRef}></div>
    </StyledContainer>
  );
};

export default Editor;