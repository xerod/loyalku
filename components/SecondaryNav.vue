<template>
  <c-flex direction="column" width="90%">
    <c-flex
      width="100%"
      direction="row"
      align="center"
      justify="space-between"
      my="3"
    >
      <c-text fontWeight="semibold" color="gray.600" fontSize="lg">
        {{ name }}
      </c-text>
      <c-button-group>
        <c-button
          right-icon="arrow-forward"
          variant-color="red"
          size="sm"
          variant="outline"
          @click="logout"
        >
          Log out
        </c-button>
      </c-button-group>
    </c-flex>
    <c-divider m="0" border-color="gray.300"></c-divider>
  </c-flex>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      default: '',
    },
  },
  methods: {
    async logout() {
      try {
        await this.$auth.logout()
        window.location.assign(window.location.origin)
      } catch (err) {
        console.log(err.response)
      }
    },
  },
}
</script>

<style></style>
