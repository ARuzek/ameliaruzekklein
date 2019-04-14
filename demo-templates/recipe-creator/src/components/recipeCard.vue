<template>
 <div>
    <slot name="title"></slot>
    <h4 class="recipeCard--Header">Ingredients</h4>
    <ul>
    <slot name="ingredient"></slot>
    </ul>
    <h4 class="recipeCard--Header">Directions</h4>
    <slot name="directions"></slot>
 </div>

</template>

<script>
export default{

}
</script>

<style scoped>

</style>
