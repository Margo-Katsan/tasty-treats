import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"

interface IUseExistingSearchParams {
  updatingSearchParams: (newParamName: string, newParam: string) => void;
  updatingAllSearchParams: () => void;
}

export const useExistingSearchParams = (): IUseExistingSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();
  const previousSearchParams: Record<string, string> = {};
  const params = useMemo(
    () => {
      const paramsEntries = [...searchParams];
      const filteredParamsEntries = paramsEntries.filter(([key, value]) => key !== 'page');
      return Object.fromEntries(filteredParamsEntries);
    },
    [searchParams]
  );

  const updatingSearchParams = (newParamName: string, newParam: string) => {
    

    for (const param in params) {
      if (param && param !== '' && param !== newParam) {
        previousSearchParams[param] = params[param];
      }
    }
    
    if (newParam !== '' && newParam !== '1') {
      setSearchParams({...previousSearchParams, [newParamName]: newParam})
    }
    else {
      delete previousSearchParams[newParamName]
      setSearchParams(previousSearchParams)
    }

  }
  const updatingAllSearchParams = () => {
    const categoryValue = searchParams.get('category');

    if (categoryValue) {
      setSearchParams({ category: categoryValue });
    }

    else {
      setSearchParams({})
    }
    
  }
  return { updatingSearchParams, updatingAllSearchParams };
}