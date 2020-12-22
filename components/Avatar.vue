<template>
  <c-flex width="100%" mt="4" justify="space-between" direction="row">
    <c-flex direction="row">
      <c-flex direction="column" justify="center">
        <c-avatar size="sm" :name="user.full_name" />
      </c-flex>

      <c-flex direction="column" textAlign="left" justify="center" ml="3">
        <c-text fontSize="sm" fontWeight="medium" color="gray.800">{{
          user.first_name
        }}</c-text>
        <c-text fontSize="xs" fontWeight="normal" color="gray.600">{{
          user.email
        }}</c-text>
      </c-flex>
    </c-flex>
    <c-flex direction="column" textAlign="left" justify="center" ml="3">
      <c-icon name="question-outline" color="gray.400" />
    </c-flex>
  </c-flex>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },
  },
}
</script>

<style></style>
