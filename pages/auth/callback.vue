<template>
  <c-flex direction="column" w="100%" h="100vh" justify="center" align="center">
    <c-spinner
      thickness="5px"
      speed="0.65s"
      empty-color="gray.300"
      color="gray.400"
      size="xl"
    />
    <c-text mt="4" fontSize="lg" fontWeight="medium">Logging in...</c-text>
  </c-flex>
</template>

<script>
export default {
  layout: 'landing',
  auth: 'guest',
}
</script>

<style></style>
