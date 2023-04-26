import { useNavigate } from "react-router-dom";
import {
  ActionButton,
  ActionButtonsContainer,
  CancelButton,
  Content,
  Description,
  Overlay,
  Title,
} from "./styles";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { ExternalLinks } from "../ProjectsCopy/styles";
import { FaTrashAlt } from "react-icons/fa";

interface IDeleteModalProps {
  projectId: number;
  deleteProject: (id: number) => void;
}

export const DeleteModal = ({
  projectId,
  deleteProject,
}: IDeleteModalProps) => {
  const navigate = useNavigate();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <ExternalLinks>
          <FaTrashAlt />
          Excluir
        </ExternalLinks>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>Você tem certeza que quer excluir esse projeto?</Title>
          <Description>
            Essa ação não poderá ser desfeita. O projeto será excluído
            permanentemente.
          </Description>
          <ActionButtonsContainer>
            <CancelButton asChild>
              <button>Cancelar</button>
            </CancelButton>
            <ActionButton asChild>
              <button
                onClick={() => {
                  deleteProject(projectId);
                  navigate("/");
                }}
              >
                Sim, excluir projeto
              </button>
            </ActionButton>
          </ActionButtonsContainer>
        </Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
