<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-keni-blue text-white shadow-md">
      <div class="container mx-auto px-4 py-3">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="~/assets/mainlogo.png"
                alt="KENI Logo"
                class="h-10 mr-2"
              />
              <span class="font-bold text-xl">KENI</span>
            </NuxtLink>
          </div>

          <div class="hidden md:block flex-grow mx-10">
            <div class="relative">
              <input
                type="text"
                placeholder="Search products..."
                class="w-full rounded-full py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-keni-light-blue"
              />
              <button class="absolute right-0 top-0 mt-2 mr-4 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <nav class="flex items-center space-x-6">
            <NuxtLink
              to="/"
              class="hover:text-keni-light-blue transition-colors"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/products"
              class="hover:text-keni-light-blue transition-colors"
              >Products</NuxtLink
            >
            <NuxtLink
              to="/about"
              class="hover:text-keni-light-blue transition-colors"
              >About</NuxtLink
            >
            <NuxtLink
              to="/signin"
              class="hover:text-keni-light-blue transition-colors"
              >Sign In</NuxtLink
            >
            <NuxtLink
              to="/register"
              class="bg-white text-keni-blue px-4 py-1 rounded-full hover:bg-gray-100 transition-colors"
              >Create Account</NuxtLink
            >
          </nav>
        </div>

        <div class="mt-3 md:hidden">
          <input
            type="text"
            placeholder="Search products..."
            class="w-full rounded-xl py-2 px-4 text-gray-700 focus:outline-none"
          />
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

  </div>
</template>
