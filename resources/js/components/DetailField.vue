<template>
    <panel-item :field="field">
        <template slot="value">
            TBD
        </template>
    </panel-item>
</template>

<script>
export default {
    props: ['resource', 'resourceName', 'resourceId', 'field'],
}
</script>
