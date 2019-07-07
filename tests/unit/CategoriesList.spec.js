import { shallowMount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";
import CategoriesList from "@/components/CategoriesList.vue";

describe("CategoriesList.vue", () => {
  it("renders a card for each category", () => {
    const defaultCategories = [{ name: "DRY" }, { name: "TDD" }];
    const wrapper = shallowMount(CategoriesList, {
      propsData: { defaultCategories }
    });

    const renderedCategories = wrapper.findAll(CategoryCard);

    expect(renderedCategories).toHaveLength(defaultCategories.length);
    renderedCategories.wrappers.forEach((wrapper, i) => {
      expect(wrapper.props().category).toBe(defaultCategories[i]);
    });
  });

  it("creates new category card", () => {
    const defaultCategories = [];
    const wrapper = shallowMount(CategoriesList, {
      propsData: { defaultCategories }
    });

    wrapper.find(".add-new-category").trigger("click");
    expect(wrapper.find.length).toBe(1);
  });

  it("removes the category card", () => {
    const wrapper = shallowMount(CategoriesList, {
      propsData: { defaultCategories: [{ id: 5, name: "BEM" }] }
    });

    const card = wrapper.find(CategoryCard);
    card.vm.$emit("destroyCard", 5);
    expect(card.exists()).toBeFalsy();
  });
});
