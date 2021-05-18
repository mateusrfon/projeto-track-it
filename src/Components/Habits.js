import styled from 'styled-components';

export default function Habits() {
    return (
        <HabitsBody>
            <MyHabits>
                <p>Meus hábitos</p>
                <div>+</div>
            </MyHabits>
            <Message>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </Message>
        </HabitsBody>
    );
}

const HabitsBody = styled.div`
    width: 100%;
    height: calc(100vh - 140px);
    margin-top: 70px;
    background-color: #F2F2F2;
    padding: 0 18px 0 20px;
    display: flex;
    flex-direction: column;
`;

const MyHabits = styled.div`
    display: flex;
    margin-top: 25px;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 23px;
        color: #126BA5;
    }
    div {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 4.5px;
        font-size: 27px;
        color: #fff;
        display: flex;
        justify-content: center;
    }
`;

const Message = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666;
    margin-top: 28px;
`;