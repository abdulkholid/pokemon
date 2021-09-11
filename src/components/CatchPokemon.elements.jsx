import styled from "@emotion/styled";

export const CatchContainer = styled.nav`
    position: fixed;
    z-index: 50;
    bottom: 3%;
    width: 90%;
    padding: 15px 10px;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    background-color: #FBD102;
    border: 5px solid #2A63AE;
    border-radius: 20px;
    display: flex;

    @media(min-width: 767px) {
        width: 500px;
    }

    &.hide {
        display: none;
    }

    button {
        .icon {
            width: 25px;
            margin-right: 10px;
        }

        &.active {
            background-color: #022C72;
            color: white;

            svg  {
                fill: white;

                path {
                    fill: white;
                }
            }
        }
    }
`;

export const CatchButton = styled.button`
    display: flex;
    background-color: #E5AA5B;
    width: 100%;
    margin: 0px 5px;
    align-items: center;
    justify-content: center;
    height: 50px;
    color: #000;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 700;
    text-decoration: none;
    border: none;
`;

export const CatchModal = styled.div`
    display: none;
    position: fixed;
    z-index: 100;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #041F4F;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .text {
        font-size: 17px;
        margin-top: 40px;
        margin-bottom: 25px;
        text-align: center;

        .name {
            font-size: 30px;
            font-weight: normal;
            margin-top: 15px;
            text-transform: capitalize;
        }
    }

    .input-text {
        width: 250px;
        font-size: 16px;
        padding: 15px 10px;
        margin-bottom: 20px;
        text-align: center;
        outline: none !important;
        border-radius: 20px;
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    .btn {
        display: block;
        width: 250px;
        text-align: center;
        text-decoration: none;
        padding: 15px 10px;
        background-color: #FBD102;
        border: 3px solid #2A63AE;
        border-radius: 20px;
        color: #000;
        font-size: 15px;
        font-weight: 500;

        &.blue {
            background-color: #2A63AE;
            color: #fff;
        }
    }
`;