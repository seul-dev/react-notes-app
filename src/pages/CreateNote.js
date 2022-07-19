import { useParams } from 'react-router-dom';

const CreateNote = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>CreateNote</h1>
      <p>노트 작성, 수정 페이지</p>
    </div>
  );
};

export default CreateNote;
