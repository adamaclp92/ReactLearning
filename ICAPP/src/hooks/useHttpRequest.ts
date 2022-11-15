import { useCallback, useState } from "react"
import HttpRequestParam from "../models/HttpRequestParam"
import Methods from "../models/Methods"
import Rme from "../models/Rme"

const useHttpRequest = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<any>(null)
  
    const httpRequest = useCallback(async (requestParam : HttpRequestParam, applyData: (data: Rme[]) => void) => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(
            requestParam.uri, {
                method: requestParam.method ? requestParam.method : Methods.GET,
                body: requestParam.body ? JSON.stringify(requestParam.body) : null,
                headers: requestParam.headers ? requestParam.headers : {}
            }
        )
  
        if (!response.ok) {
          throw new Error('Request failed!')
        }
  
        const data = await response.json()
        applyData(data)
    
      } catch (err: any) {
        setError(err.message || 'Something went wrong!')
      }
      setIsLoading(false)
    }, [])
  
    return {
        isLoading,
        error,
        httpRequest
    }
}

export default useHttpRequest