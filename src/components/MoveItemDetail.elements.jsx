import styled from "@emotion/styled";

export const MoveItemDetailStyle = styled.div`
	position: relative;
	width: 45%;
	margin: 0px 2.5% 5%;
	height: 110px;
	border-radius: 20px;
	padding: 15px;
	background-color: #041f4f;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	line-height: 25px;
    
    @media(min-width: 767px) {
        background-color: #2A63AE;
    }

	.move {
		font-size: 17px;
		color: #fbd102;
		font-weight: 500;
	}
`;
