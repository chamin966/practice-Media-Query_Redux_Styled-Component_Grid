import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

function Detail({ jobTodo }) {
  const toDoID = Number(useParams().id);
  const clickedJob = jobTodo.find((v) => v.id === toDoID);

  return (
    <div>
      <h1>Detail</h1>
      <div>내용: {clickedJob?.text}</div>
      <div>ID: {toDoID}</div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return { jobTodo: state };
};

export default connect(mapStateToProps)(Detail);
