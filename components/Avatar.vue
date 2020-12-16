<template>
  <c-flex width="100%" mt="4" justify="space-between" direction="row">
    <c-flex direction="row">
      <c-flex direction="column" justify="center">
        <c-avatar
          size="sm"
          :name="profile.full_name"
          src="https://as.ly/chakra-evan-you"
        />
      </c-flex>
      <c-flex direction="column" textAlign="left" justify="center" ml="3">
        <c-text fontSize="sm" fontWeight="medium" color="gray.800">{{
          profile.first_name
        }}</c-text>
        <c-text fontSize="xs" fontWeight="normal" color="gray.600">{{
          profile.email
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
  data() {
    return {
      profile: [],
    }
  },
  async mounted() {
    await this.$axios
      .$get('https://api.mokapos.com/v1/profile/self')
      .then((response) => {
        console.log(response)
        this.profile = response
      })
  },
}
</script>

<style></style>
