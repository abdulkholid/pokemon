import styled from '@emotion/styled';

export const ImageDetailStyle = styled.div`
	padding: 10px 20px 20px;
	background-color: #fff;
	position: relative;
	text-align: right;

	.image {
		width: 110px;
		background-color: #f5f5f5;
		padding: 10px;
		border-radius: 25px;
	}

	.detail {
		position: absolute;
		left: 20px;
		bottom: -30px;
		width: 200px;
		background-color: #fa4246;
		color: #fff;
		padding: 20px;
		font-size: 15px;
		text-align: left;

		.own-badge {
			position: absolute;
			top: -40px;
			left: 0px;
			color: #2a63ae;
			background-color: #fbd102;
			padding: 5px 10px;
			font-size: 13px;
			font-weight: 500;
			border-radius: 5px;
		}

		.name {
			text-decoration: none;
			font-size: 25px;
			color: #000;
			text-transform: uppercase;
			display: block;
			margin-bottom: 5px;
		}

		.attributes {
			span {
				display: inline-block;
				position: relative;
				margin-right: 20px;

				&:not(:last-child):before {
					content: "";
					position: absolute;
					width: 5px;
					height: 5px;
					border-radius: 50%;
					background-color: #fdf600;
					right: -12px;
					top: 7px;
				}

				img.icon {
					vertical-align: -3px;
					margin-right: 3px;
				}
			}
		}
	}
`;
