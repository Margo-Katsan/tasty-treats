import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"
export const useExistingSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const params = useMemo(
    () => {
      const paramsEntries = [...searchParams];
      const filteredParamsEntries = paramsEntries.filter(([key, value]) => key !== 'page');
      return Object.fromEntries(filteredParamsEntries);
    },
    [searchParams]
  );

  const updatingSearchParams = (newParamName, newParam) => {
    const previousSearchParams = {};

    for (const param in params) {
      if (param && param !== '' && param !== newParam) {
        previousSearchParams[param] = params[param];
      }
    }
    
    if (newParam !== '' && newParam !== 1) {
      setSearchParams({...previousSearchParams, [newParamName]: newParam})
    }
    else {
      delete previousSearchParams[newParamName]
      setSearchParams(previousSearchParams)
    }

  }
  return { updatingSearchParams };
}