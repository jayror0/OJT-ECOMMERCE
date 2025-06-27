<template>
  <div>
    <section class="bg-keni-blue text-white py-16">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Welcome to KENI
        </h1>
        <div class="flex justify-center gap-4">
          <NuxtLink
            to="/products"
            class="bg-white text-keni-blue px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition-colors"
            >Shop Now</NuxtLink
          >
          <NuxtLink
            to="/about"
            class="border border-white px-6 py-3 rounded-xl font-medium hover:bg-keni-light-blue transition-colors"
            >Learn More</NuxtLink
          >
        </div>
      </div>
    </section>

    
        <h2 class="text-3xl font-bold mb-8 text-center">Featured Products</h2>
    
  </div>
</template>

<script setup>
import { products } from "~/types/model";

</script>
