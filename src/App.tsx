import styled from 'styled-components';

const StyledHeader = styled.h1`
    color: #3636e9;
    font-size: 42px;
`;

const StyledData = styled.p`
    color: #8d8dff;
    font-size: 24px;
    font-weight: 700;
`;

const StyledButton = styled.button`
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid black;
    padding: 8px 16px;
`;

const StyledSuccessButton = styled(StyledButton)`
    border-color: green;
    color: green;
`;

const StyledFailedButton = styled(StyledButton)`
    border-color: red;
    color: red;
`;

function App() {
    return (
        <div className="App">
            <StyledHeader>Bira Neves</StyledHeader>
            <StyledData>ubirajara.neves@usp.br</StyledData>
            <StyledData>+55 11 555-1234</StyledData>
            <StyledData>Brasil</StyledData>

            <StyledSuccessButton>Adicionar</StyledSuccessButton>
            <StyledFailedButton>Remover</StyledFailedButton>
            <StyledButton>Detalhes</StyledButton>
        </div>
    );
}

export default App;
