<template lang="pug">
.chip.category-card__chip
  figure.avatar(:data-initial="icon")
  span.text-primary {{ paddedScore }}
</template>

<script>
export default {
  name: "CategoryCardScore",
  data: () => ({
    icons: {
      0: "💀",
      50: "🌓",
      60: "⛏️",
      70: "🍕",
      80: "✨",
      90: "🤖",
      100: "🎷"
    }
  }),
  props: {
    score: {
      type: Number,
      default: 0
    }
  },
  computed: {
    icon() {
      return this.icons[this.score] || "💣";
    },
    paddedScore() {
      return this.score.toString().padStart(3, 0);
    }
  }
};
</script>
