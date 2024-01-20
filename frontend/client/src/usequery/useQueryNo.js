import {useQuery} from "react-query"


export function CustomUseQuery(fetcher) {
  return useQuery(
    "featured",
    fetcher,
    {
        refetchInterval:70000,
        refetchIntervalInBackground:true,
        refetchOnWindowFocus:true,
        cacheTime:8000,
        keepPreviousData: true
    }

  )
}

 