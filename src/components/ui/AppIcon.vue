<script setup lang="ts">
defineProps<{ name: string; size?: number }>()

const paths: Record<string, string> = {
  heart:
    'M12 20.5C7 17 3.5 13.8 3.5 9.7 3.5 7 5.6 5 8.2 5c1.6 0 3 .8 3.8 2 .8-1.2 2.2-2 3.8-2 2.6 0 4.7 2 4.7 4.7 0 4.1-3.5 7.3-8.5 10.8z',
  spark:
    'M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M17.7 6.3l-2.5 2.5M8.8 15.2l-2.5 2.5',
  leaf:
    'M5 19c0-7 5-12 14-13 0 9-5 14-12 14-1.5 0-2-1-2-1zM5 19c2-4 5-6 8-7',
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3zM9 12l2 2 4-4',
  feather:
    'M20 4C13 4 7 9 7 16l-3 4M20 4c0 7-5 13-12 13M8.5 15.5h7M20 4l-9 9',
  compass: 'M12 21a9 9 0 100-18 9 9 0 000 18zM15.5 8.5l-2 5-5 2 2-5 5-2z',
  whatsapp:
    'M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3zm0 1.8a7.2 7.2 0 11-3.7 13.4l-.3-.2-2.6.7.7-2.6-.2-.3A7.2 7.2 0 0112 4.8zm4.1 8.9c-.2-.1-1.3-.6-1.5-.7-.2-.1-.3-.1-.5.1-.1.2-.5.7-.7.8-.1.2-.2.2-.4.1-.2-.1-.9-.3-1.7-1-.6-.6-1-1.2-1.2-1.4-.1-.2 0-.3.1-.4l.3-.4c.1-.1.2-.2.2-.4.1-.1 0-.3 0-.4 0-.1-.5-1.2-.7-1.6-.2-.4-.3-.4-.5-.4h-.4c-.2 0-.4 0-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.4.5.2 1 .4 1.3.5.6.2 1 .1 1.4.1.4-.1 1.3-.5 1.5-1.1.2-.5.2-1 .1-1.1 0-.1-.2-.1-.4-.2z',
  star: 'M12 3.5l2.5 5.4 5.9.6-4.4 4 1.2 5.8L12 16.9 6.8 19.3 8 13.5 3.6 9.5l5.9-.6z',
  instagram:
    'M7.5 3.5h9A4 4 0 0120.5 7.5v9a4 4 0 01-4 4h-9a4 4 0 01-4-4v-9a4 4 0 014-4zM12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM17 6.6h.01',
  mail: 'M3.5 6.5h17v11h-17v-11zM4 7l8 6 8-6',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  plus: 'M12 5v14M5 12h14',
}
</script>

<template>
  <svg
    :width="size ?? 24"
    :height="size ?? 24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[name]" :fill="name === 'whatsapp' ? 'currentColor' : 'none'" :stroke="name === 'whatsapp' ? 'none' : 'currentColor'" />
  </svg>
</template>
