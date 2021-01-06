<template>
  <c-flex direction="column" width="90%">
    <c-flex
      width="100%"
      direction="row"
      align="center"
      justify="space-between"
      my="3"
    >
      <c-flex align-items="center">
        <c-text fontWeight="semibold" color="gray.600" fontSize="lg">
          {{ name }}
        </c-text>

        <c-spinner
          v-if="isFetchingData"
          size="3"
          color="yellow.500"
          emptyColor="yellow.200"
          speed="0.8s"
          ml="2"
        />

        <c-pseudo-box
          v-else
          as="div"
          w="2"
          h="2"
          rounded="full"
          bg="#50e3c2"
          ml="2"
        />
      </c-flex>
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
    isFetchingData: {
      required: true,
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
