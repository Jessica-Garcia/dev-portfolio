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

  position: fixed;

  /* Centralizar na tela */
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
