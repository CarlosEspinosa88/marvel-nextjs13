
type Blog = {
  params: {
    id: string
  }
}
export default function Page({ params }: Blog) {
  // in this page
  // you can get this props { params, searchParams }

  return <h1>Hello, Blog! {params.id}</h1>;
}