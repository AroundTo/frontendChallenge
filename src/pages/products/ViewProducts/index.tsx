import { useItems } from '../../../graphql/hooks'

const ViewProducts = () => {
  const { items } = useItems()
  return (
    <>
      <h1 className="text-4xl font-bold underline mb-3 text-primary-500 m-4">
        List of Products
      </h1>
      <ol className="shadow-card m-4 p-4">
        {items?.map(item => <li key={item?.name}>{item?.name}</li>)}
      </ol>
    </>
  )
}

export default ViewProducts
