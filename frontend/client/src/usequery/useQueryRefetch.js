import {useQuery} from "react-query"


export function CustomUseQuery(fetcher, productId) {
  return useQuery(
   [ "featured", productId],
    ()=>fetcher(productId),
    {
       enabled:false
    }

  )
}

 