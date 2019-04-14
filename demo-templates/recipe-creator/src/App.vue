<template>
  <div id="app">
    <form @submit.prevent="writeRecipe">
      <h1> Create Your Recipe</h1>
      <input v-model="newTitle" placeholder="Your recipe title" required/>
      <fieldset>
      <input v-on:keyup.enter="addIngredient" v-model="newIngredient" placeholder="Your recipe ingredients" />
      <span @click="addIngredient"  class="addIngredientButton">+</span>
      <ul class="ingredientPreviewContainer" v-show="newIngredients">
        <li class="ingredientPreview" :key="ingredient" v-for='ingredient in newIngredients'>
          {{ingredient}}
        </li>
      </ul>
      </fieldset>
      <textarea v-model="newDirections" placeholder="Your recipe directions" required></textarea>
      <button type="submit">Create A Recipe Card</button>

    </form>
      <div  class="recipecontainer" >
        <div class="recipe" :key="recipe" v-for="recipe in recipes">
          <recipeCard>
            <h3 slot="title">
              {{recipe.title}}
            </h3>
            <li slot="ingredient" :key="ingredient" v-for="ingredient in recipe.ingredients">
              {{ingredient}}
            </li>
            <p slot="directions">
              {{recipe.directions}}
            </p>
          </recipeCard>
        </div>
      </div>
   </div>
</template>

<script>
import recipeCard from "./components/recipeCard.vue";
export default {
  name: 'app',
  components: {
    recipeCard
  },
  data() {
    return {
      newTitle: '',
      newIngredients: [],
      newIngredient: '',
      newDirections: '',
      recipes: []
    }
  },
  methods: {
    writeRecipe()  {

      var newRecipe = new Object(
        {
        title: this.newTitle,
        ingredients: this.newIngredients,
        directions: this.newDirections
       }
      );

      this.recipes.push(newRecipe);
      this.newTitle = '';
      this.newIngredients = [];
      this.newDirections = '';


    },

    addIngredient() {
       this.newIngredients.push(this.newIngredient);
       this.newIngredient = '';
   }
  }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat|Sue+Ellen+Francisco');

html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
}

#app {
  display: flex;
  margin: 2em;
  font-family: 'Montserrat', sans-serif;
}

.recipecontainer{
  width: 50%;
  display: flex;
  flex-direction: column;
}

.recipe {
  border: none;
  border-radius: .5em;
  box-shadow: 0px 0px 33px -25px
  rgba(0,0,0,0.65);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  background-color: #F6E9E7;
  margin: 1em;
  padding: 1em;
}

.recipe h3  {
  margin: .5em;
  font-size: 2.5em;
  text-align: center;
}

.recipe h4  {
  font-size: 1.5em;
  margin: 0em;
}

.recipe h4, .recipe p  {
  padding-left: 1em;
}

.recipe p, .recipe li {
  font-size: 1.3em
}

form {
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2em;
}

form * {
  margin: 1em;
  width: 100%;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
}

form fieldset{
  padding: 0em;
  margin: 0em;
  border: none;
}

form fieldset input{
  width: 88%;
  margin: 0px;
}

form fieldset ul{
  margin: 0px;
}

h1 {
  text-align: center;
}

input, textarea {
  background-color: #f9f9f9;
  border: solid 1px #f0f0f0;
  font-size: 1em;
  border-radius: .5em;
}

.addIngredientButton {
  float: right;
  top: 10px;
  width: 1.2em;
  width: 10%;
  border-radius: 10em;
  font-size: 2.5em;
  padding: 0em;
  margin: 0em;
}

.ingredientPreviewContainer {
 padding-left: 0px;
  padding-bottom: 0em;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.ingredientPreview {
  list-style: none;
  margin-left: 0em;
  margin-top: 0em;
  background-color: #F6E9E7;
  padding: .5em;
  border-radius: .5em;
  width: auto;
}

button, fieldset span {
  margin: 0;
  background-color: #F6E9E7;
  font-size: 1em;
  border: none;
   border-radius: .5em;
  text-align: center;
}

button:hover, span:hover {
  background-color: #e6d2cf;
  cursor: pointer;

}

</style>
