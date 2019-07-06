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
});
