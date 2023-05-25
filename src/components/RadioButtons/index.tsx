import { Control, Controller } from "react-hook-form";
import { Indicator, Item, Root } from "./styles";

interface RadioProps {
  control: Control<any>;
  name: string;
}

export const RadioButtons = ({ control, name }: RadioProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <Root onValueChange={field.onChange} value={field.value}>
            <div>
              <Item value="Em progresso" id="Em progresso">
                <Indicator />
              </Item>
              <label htmlFor="Em progresso">Em andamento</label>
            </div>
            <div>
              <Item value="Concluído" id="Concluído">
                <Indicator />
              </Item>
              <label htmlFor="Concluído">Concluído</label>
            </div>
            <div>
              <Item value="Pausado" id="Pausado">
                <Indicator />
              </Item>
              <label htmlFor="Pausado">Pausado</label>
            </div>
            <div>
              <Item value="Futuro" id="Futuro">
                <Indicator />
              </Item>
              <label htmlFor="Futuro">Futuro</label>
            </div>
          </Root>
        );
      }}
    />
  );
};
