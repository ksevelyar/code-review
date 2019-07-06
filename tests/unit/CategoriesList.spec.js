import { shallowMount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";
import CategoriesList from "@/components/CategoriesList.vue";

describe("CategoriesList.vue", () => {
  it("renders a card for each category", () => {
    const categories = [{ name: "DRY" }, { name: "TDD" }];
    const wrapper = shallowMount(CategoriesList, {
      propsData: { categories }
    });

    expect(wrapper.findAll(CategoryCard)).toHaveLength(categories.length);
  });
});
