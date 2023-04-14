import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { remove } from '../store';

function ToDo({ text, id, onDELBtnClick }) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDELBtnClick}>DEL</button>
    </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { onDELBtnClick: () => dispatch(remove(ownProps.id)) };
};

export default connect(null, mapDispatchToProps)(ToDo);

/*
mapStateToProps와 mapDispatchToProps는 react-redux 라이브러리의 connect 함수에서 사용되는 인자로, Redux Store의 상태(state)와 컴포넌트의 속성(ownProps)을 매핑하여 React 컴포넌트에 전달하는 역할을 합니다.

mapStateToProps(state, ownProps):
- state: Redux Store의 현재 상태입니다. 이를 통해 컴포넌트가 Redux Store의 상태를 읽어올 수 있습니다.
- ownProps: 컴포넌트가 받는 속성(props)입니다. mapStateToProps 함수가 호출된 컴포넌트의 속성들이 전달됩니다. 이를 통해 컴포넌트 내에서 Redux Store의 상태와 컴포넌트의 속성들을 함께 사용할 수 있습니다.

mapDispatchToProps(dispatch, ownProps):
- dispatch: Redux의 액션을 디스패치(dispatch)하는 함수입니다. 이를 통해 컴포넌트가 Redux Store에 액션을 전달하여 상태를 변경할 수 있습니다.
- ownProps: mapStateToProps와 마찬가지로, 컴포넌트가 받는 속성(props)입니다. 이를 통해 컴포넌트 내에서 Redux의 액션 디스패치와 함께 컴포넌트의 속성들을 사용할 수 있습니다.
이렇게 mapStateToProps와 mapDispatchToProps 함수를 사용하여 Redux Store의 상태와 액션을 React 컴포넌트에 매핑함으로써, 컴포넌트는 Redux의 상태와 액션을 사용하여 필요한 데이터를 읽고, 상태를 변경할 수 있게 됩니다.

*/
