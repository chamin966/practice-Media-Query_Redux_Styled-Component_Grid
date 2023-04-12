import styled from 'styled-components';

function App() {
  //styled-component는 반드시 함수명을 대문자로 시작해야 한다!
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
  `;

  return (
    <div>
      <div>Hello!</div>
      <StyledButton>버튼</StyledButton>
      <LargeButton>라지버튼</LargeButton>
      <LargeButton primary={true}>라지버튼</LargeButton>
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
    </div>
  );
}

export default App;
