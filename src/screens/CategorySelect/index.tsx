import { categories } from "../../utils/categories";

import { Button } from "../../components/Button";

import {
  CategorySelectContainer,
  CategorySelectHeader,
  CategorySelectItem,
  CategorySelectItemTitle,
  CategorySelectList,
  CategorySelectTitle,
  CategorySelectItemIcon,
  Separator,
  CategorySelectFooter,
} from "./CategorySelect.styles";

interface Category {
  key: string;
  name: string;
  icon: string;
}

interface Props {
  category: Category;
  setCategory: (item: Category) => void;
  closeSelectCategory: () => void;
}

export function CategorySelect({
  category,
  closeSelectCategory,
  setCategory,
}: Props) {
  return (
    <CategorySelectContainer>
      <CategorySelectHeader>
        <CategorySelectTitle>Categorias</CategorySelectTitle>
      </CategorySelectHeader>

      <CategorySelectList<any>
        data={categories}
        ItemSeparatorComponent={Separator}
        keyExtractor={(item: { key: string }) => item.key}
        renderItem={({ item }: { item: Category }) => (
          <CategorySelectItem
            onPress={() => setCategory(item)}
            isActive={item.key === category.key}
          >
            <CategorySelectItemIcon name={item.icon} />
            <CategorySelectItemTitle>{item.name}</CategorySelectItemTitle>
          </CategorySelectItem>
        )}
      />

      <CategorySelectFooter>
        <Button title="Selecionar" onPress={closeSelectCategory} />
      </CategorySelectFooter>
    </CategorySelectContainer>
  );
}
