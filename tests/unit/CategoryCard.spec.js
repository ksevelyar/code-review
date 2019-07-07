import { shallowMount } from "@vue/test-utils";
import CategoryCard from "@/components/CategoryCard.vue";

describe("CategoryCard.vue", () => {
  it("renders props.category.name when passed", () => {
    const category = { name: "Best Practices", statements: [] };
    const wrapper = shallowMount(CategoryCard, {
      propsData: { category }
    });
    expect(wrapper.text()).toMatch(category.name);
  });

  it("removes a category card", () => {
    const wrapper = shallowMount(CategoryCard);

    wrapper.find(".category-card__delete").trigger("click");
    expect(wrapper.emitted("destroyCard")).toHaveLength(1);
  });
});
