import { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

type TStyledButtonProps = {
    variant?: 'success' | 'fail';
};

// const RotateKeyFrame = keyframes`
//     from {
//         transform: rotate(0deg)
//     }
//     to {
//         transform: rotate(360deg);
//     }
// `;

const StyledHeader = styled.h1`
    color: ${(props) => props.theme.main};
    font-size: 42px;
`;

const StyledData = styled.p`
    color: ${(props) => props.theme.secondary};
    font-size: 24px;
    font-weight: 700;
`;

const StyledButton = styled.button<TStyledButtonProps>`
    background-color: transparent;
    border-radius: 8px;
    border: 2px solid black;
    padding: 8px 16px;

    :hover {
        cursor: pointer;
        background-color: #f2f2f2;
    }

    ${(props) => {
        switch (props.variant) {
            case 'success':
                return css`
                    border-color: green;
                    color: green;
                `;
            case 'fail':
                return css`
                    border-color: red;
                    color: red;
                `;
        }
    }}
`;

const themeBlue = {
    main: 'blue',
    secondary: '#8d8dff',
};

const themeRed = {
    main: 'red',
    secondary: '#fc7979',
};

function App() {
    const [theme, setTheme] = useState(themeBlue);

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <StyledHeader>Bira Neves</StyledHeader>
                <div>
                    <StyledButton
                        onClick={() => {
                            theme === themeBlue
                                ? setTheme(themeRed)
                                : setTheme(themeBlue);
                        }}
                    >
                        Toggle Theme
                    </StyledButton>
                </div>
                <StyledData>ubirajara.neves@usp.br</StyledData>
                <StyledData>+55 11 555-1234</StyledData>
                <StyledData>Brasil</StyledData>

                <StyledButton variant="success">Adicionar</StyledButton>
                <StyledButton variant="fail" style={{ margin: '0 8px' }}>
                    Remover
                </StyledButton>
                <StyledButton>Detalhes</StyledButton>
            </ThemeProvider>
        </div>
    );
}

export default App;
