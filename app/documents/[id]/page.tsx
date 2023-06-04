export default function Page({ params } : {
    params: { id: string }
}) {
    return <h1>Document {params.id}</h1>;
}