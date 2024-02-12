export const recipes = [{
  id: 'greek-salad',
  name: 'Greek Salad',
  ingredients: new Set(['tomatoes', 'cucumber', 'onion', 'olives', 'feta'])
}, {
  id: 'hawaiian-pizza',
  name: 'Hawaiian Pizza',
  ingredients: new Set(['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple'])
}, {
  id: 'hummus',
  name: 'Hummus',
  ingredients: new Set(['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini'])
}];

export default function RecipeList() {
  function getComps(){
    return recipes.map(ele => {
      return (
        <div key={ele.id}>
          <h3>{ele.name}</h3>
          <ul>
            {Array.from(ele.ingredients).map((e,index) => {
              return (
                <li key={e+index}>{e}</li>
              )
            })}
          </ul>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Recipes</h1>
      {getComps()}
    </div>
  );
}