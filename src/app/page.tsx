import Form from "next/form";

export default function Home() {
  return (
    <div >
      {/*<form action="/submit">
          <input type="text" name="name" placeholder="Name"/>
          <button>Sub</button>
      </form>*/}
        <Form action={'/submit'}>
            <input type="text" name="name" placeholder="Name"/>
            <button>Submit</button>
        </Form>
    </div>
  );
}
