<template>
  <c-flex
    :width="{
      base: '0%',
      lg: '25%', // 992px upwards
    }"
    bg="white"
    direction="column"
    boxShadow="md"
    justify="start"
    align="center"
  >
    <Logo width="140" height="70" />
    <c-flex width="90%" direction="column">
      <Avatar />
      <c-input-group width="100%" mt="8">
        <c-input-left-element
          ><c-icon name="search-sm" color="gray.300"
        /></c-input-left-element>
        <c-input
          boxShadow="sm"
          border-color="gray.200"
          type="phone"
          placeholder="Search"
        />
      </c-input-group>

      <c-list mt="4">
        <c-list-item>
          <c-pseudo-box
            display="flex"
            align-items="center"
            color="gray.600"
            rounded="md"
            p="3"
            :_hover="{ bg: 'gray.100', cursor: 'pointer' }"
          >
            <c-icon name="chart-pie-md" mr="3" size="22px" color="gray.400" />
            <c-text font-weight="medium" font-size="sm" justify="center">
              Dashboard
            </c-text>
          </c-pseudo-box>
        </c-list-item>
        <c-list-item>
          <c-pseudo-box
            display="flex"
            align-items="center"
            color="gray.600"
            rounded="md"
            p="3"
            :_hover="{ bg: 'gray.100', cursor: 'pointer' }"
          >
            <c-icon name="user-group-md" mr="3" size="22px" color="gray.400" />
            <c-text font-weight="medium" font-size="sm" justify="center">
              Customers
            </c-text>
          </c-pseudo-box>
        </c-list-item>
      </c-list>
    </c-flex>
  </c-flex>
</template>

<script>
import Logo from '@/components/Logo.vue'
import Avatar from '@/components/Avatar.vue'

export default {
  components: {
    Logo,
    Avatar,
  },
}
</script>

<style></style>
