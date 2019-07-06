import { shallowMount } from "@vue/test-utils";
import CategoryCardScore from "@/components/CategoryCardScore.vue";

describe("CategoryCardScore.vue", () => {
  it("renders padded score", () => {
    const score = 10;
    const wrapper = shallowMount(CategoryCardScore, {
      propsData: { score }
    });

    expect(wrapper.find(".text-primary").text()).toBe("010");
  });

  it("computes icon", () => {
    const score = 100;
    const wrapper = shallowMount(CategoryCardScore, {
      propsData: { score }
    });

    expect(wrapper.find(".avatar").attributes("data-initial")).toBe("🎷");
  });
});
