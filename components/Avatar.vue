<template>
  <c-flex width="100%" mt="4" justify="space-between" direction="row">
    <c-flex direction="row">
      <c-flex direction="column" justify="center">
        <c-avatar
          size="sm"
          :name="getUser.full_name"
          src="https://as.ly/chakra-evan-you"
        />
      </c-flex>

      <c-flex direction="column" textAlign="left" justify="center" ml="3">
        <c-text fontSize="sm" fontWeight="medium" color="gray.800">{{
          getUser.first_name
        }}</c-text>
        <c-text fontSize="xs" fontWeight="normal" color="gray.600">{{
          getUser.email
        }}</c-text>
      </c-flex>
    </c-flex>
    <c-flex direction="column" textAlign="left" justify="center" ml="3">
      <c-icon name="question-outline" color="gray.400" />
    </c-flex>
  </c-flex>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('profile', { getUser: 'GET_USER' }),
  },
}
</script>

<style></style>
