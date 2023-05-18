import { useNavigate } from "react-router-dom";
import {
  ActionButton,
  ActionButtonsContainer,
  CancelButton,
  Content,
  Description,
  Overlay,
  Title,
  DeleteButton,
} from "./styles";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { FaTrashAlt } from "react-icons/fa";
import { IProjectInformation } from "../../@types/IProjectInformation";
interface IDeleteModalProps {
  project: IProjectInformation;
  deleteProject: (id: number) => void;
}

export const DeleteModal = ({ project, deleteProject }: IDeleteModalProps) => {
  const navigate = useNavigate();

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <DeleteButton>
          <strong>
            <FaTrashAlt />
          </strong>
          Excluir
        </DeleteButton>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <Overlay />
        <Content>
          <Title>
            Você tem certeza que quer excluir o projeto {project.title}?
          </Title>
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
                  deleteProject(project.id);
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
