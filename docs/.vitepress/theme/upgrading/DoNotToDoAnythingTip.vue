<script setup>

import {nowChanges, nowUpgradingInfo} from "./upgrading";
</script>

<template>
    <div style="text-align: center" v-if="nowChanges.length === 0  ">
        <b>Congratulations!<br/>You do not need to do anything to upgrading from {{ nowUpgradingInfo.from }} to {{ nowUpgradingInfo.to }}</b>
    </div>
</template>

<style scoped>

</style>