import { SearchFormContainer } from "./styles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaSearch } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";

const searchFormSchema = z.object({
  query: z.string().min(1),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;
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
