<template>
  <section class="py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">{{ title }}</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  title: {
    type: String,
    default: "Featured Products",
  },
  products: {
    type: Array,
    required: true,
  },
  limit: {
    type: Number,
    default: 4,
  },
  showViewAll: {
    type: Boolean,
    default: true,
  },
});

</script>
