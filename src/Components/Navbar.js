import styled from 'styled-components';

export default function Navbar() {
    return (
        <Box>
            <h1>TrackIt</h1>
            <img src="https://static8.depositphotos.com/1003924/886/i/600/depositphotos_8868243-stock-photo-spectrum-multicolored-eye-macro.jpg" />
        </Box>
    );
};

const Box = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    h1 {
        font-family: 'Playball';
        font-size: 39px;
        line-height: 49px;
        color: #fff;
        margin-left: 18px;
    }

    img {
        margin-right: 10px;
        width: 51px;
        height: 51px;
        border-radius: 25.5px;
    }
`;
