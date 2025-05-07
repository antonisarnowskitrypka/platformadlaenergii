<script setup lang="ts">

const { initialize, enableAnalytics } = useGtag();
onBeforeMount(() => {
  console.log('activating...')
  initialize();
  enableAnalytics();
  useTrackEvent('page_view');
});

</script>

<template>
  <div class="hidden">
    Component: GTag
  </div>
</template>

<style scoped></style>
