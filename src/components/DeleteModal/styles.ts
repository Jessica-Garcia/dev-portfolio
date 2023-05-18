import styled from "styled-components";
import * as AlertDialog from "@radix-ui/react-alert-dialog";

export const Overlay = styled(AlertDialog.Overlay)`
  position: fixed;
  width: 100vw;
  inset: 0;
  height: 100vh;
  background: ${(props) => props.theme.colors.background2};
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 100;
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(AlertDialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme.colors.background1};
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  &:focus {
    outline: none;
  }
`;
export const Title = styled(AlertDialog.Title)`
  margin: 10px;
  font-size: 24px;
  font-weight: 500;
  color: #13adc7;
`;
export const Description = styled(AlertDialog.Description)`
  margin: 20px 10px;
  color: rgba(255, 255, 255, 0.5);

  font-size: 18px;
  line-height: 1.5;
`;
export const CancelButton = styled(AlertDialog.Cancel)`
  border: 0;
  border-radius: 8px;
  margin: 20px 10px;
  line-height: 0;
  cursor: pointer;
  background: ${(props) => props.theme.colors["blue-100"]};
  width: 150px;
  height: 50px;
  padding: 10px;
  color: ${(props) => props.theme.colors.background1};
  font-weight: bold;
`;

export const ActionButton = styled(AlertDialog.Action)`
  border: 0;
  border-radius: 8px;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.primary1};
  background: ${(props) => props.theme.colors["red-500"]};

  margin: 20px 10px;
  height: 50px;
  width: max-content;
  padding: 10px;
  font-weight: bold;
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

export const DeleteButton = styled.button`
  color: #d4c0c0;
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  border-radius: 15px;
  transition: 0.5s;
  height: 3.1rem;
  width: 9.6rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background: linear-gradient(270deg, #f46737 0%, #945dd6 100%);
  }
`;
