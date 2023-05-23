import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  SearchFormInputs,
  searchFormSchema,
} from "../../validations/ZodValidations";
import { SearchFormContainer } from "./styles";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
interface SearchFormProps {
  onGetProjects: (query?: string) => void;
}

export const SearchForm = ({ onGetProjects }: SearchFormProps) => {
  const { register, handleSubmit, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  const query = watch("query");

  const handleSearchProjects = (data: SearchFormInputs) => {
    onGetProjects(data.query);
  };

  const handleResetSearchAndReturnToFirstPage = () => {
    onGetProjects();
  };

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchProjects)}>
      <input
        type="text"
        placeholder="Filtrar por tag"
        autoComplete="off"
        {...register("query")}
      />
      <button type="reset" onClick={handleResetSearchAndReturnToFirstPage}>
        <AiFillCloseCircle />
      </button>
      <button type="submit" disabled={!query}>
        <FaSearch />
      </button>
    </SearchFormContainer>
  );
};
