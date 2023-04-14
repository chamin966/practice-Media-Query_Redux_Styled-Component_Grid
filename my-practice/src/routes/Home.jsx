import { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { add } from '../store';
import ToDo from '../components/ToDo';

/*
styled-component 사용 시 주의사항!
1. 반드시 styled-component 함수명을 대문자로 시작해야 한다.
2. 함수 내부에 styled-component 함수가 있으면 동적 생성 에러가 발생하므로
styled-component함수는 사용 함수 밖에 전역으로 생성할 것.
*/

const StyledButton = styled.button`
  background-color: red;
`;

const LargeButton = styled(StyledButton)`
  font-size: 150px;
  color: ${({ primary }) => {
    return primary ? 'blue' : 'white';
  }};
`;

const GridContainer = styled.div`
  border: 10px solid green;
  display: grid;
  grid-template-columns: 300px 1fr;
  div {
    border: 5px solid pink;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;

const TodoListInputBox = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
`;

function Home({ toDolist, addTodo }) {
  const [text, setText] = useState('');

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onSubmitText = (e) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div>
      <h1>Todo-List</h1>
      <TodoListInputBox>
        <input type='text' value={text} onChange={onChangeText} />
        <form onSubmit={onSubmitText}>
          <button>추가</button>
        </form>
      </TodoListInputBox>
      <ul>
        {toDolist.map((v, i) => (
          <ToDo key={i} text={v.text} id={v.id} />
        ))}
      </ul>
      <GridContainer>
        <div>
          <ul>
            <li>list</li>
            <li>list</li>
            <li>list</li>
            <li>list</li>
          </ul>
        </div>
        <div>
          <h1>Article</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iure hic autem dolorem nisi sequi totam quibusdam, at
            perspiciatis necessitatibus tenetur obcaecati saepe omnis quisquam? Illum explicabo maxime nam facilis?Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nam, ipsa expedita iure autem, nemo, alias voluptatum quasi quia unde
            dolores fuga eaque deleniti id iusto similique qui dolorum aut reprehenderit!lo. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Distinctio beatae deserunt nostrum reiciendis asperiores assumenda praesentium eveniet
            quasi. Quam dolor ipsa possimus, unde rem ea totam harum ratione doloremque facilis?
          </p>
        </div>
      </GridContainer>
      <StyledButton>버튼</StyledButton>
      <LargeButton>라지버튼</LargeButton>
      <LargeButton primary={true}>라지버튼</LargeButton>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { toDolist: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return { addTodo: (v) => dispatch(add(v)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
