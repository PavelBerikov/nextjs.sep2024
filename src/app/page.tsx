import {getMeals, saveMeal} from "@/server-actions/serverActions";
import Form from "next/form";

export default async function Home() {
    const meals = await getMeals();
  return (
    <div>
      <Form action={saveMeal}>
        <input type="text" name={'title'} placeholder="Enter username" />
        <button>Save</button>
      </Form>
        {
            meals.map(meal => <div key={meal.id}>{meal.id} - {meal.title}</div>)
        }
    </div>
  );
}
