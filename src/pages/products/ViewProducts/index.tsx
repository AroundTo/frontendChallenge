import { useItems } from '../../../graphql/hooks'

const ViewProducts = () => {
  const { items } = useItems()
  return <ol>{items?.map(item => <li key={item?.name}>{item?.name}</li>)}</ol>
}

export default ViewProducts
