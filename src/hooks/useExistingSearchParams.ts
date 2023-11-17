import { useMemo } from "react";
import { useSearchParams } from "react-router-dom"
export const useExistingSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const params = useMemo(
    () => {
      const paramsEntries = [...searchParams];
      const filteredParamsEntries = paramsEntries.filter(([key, value]) => key !== 'page');
      // @ts-expect-error TS(2550): Property 'fromEntries' does not exist on type 'Obj... Remove this comment to see the full error message
      return Object.fromEntries(filteredParamsEntries);
    },
    [searchParams]
  );

  const updatingSearchParams = (newParamName: any, newParam: any) => {
    const previousSearchParams = {};

    for (const param in params) {
      if (param && param !== '' && param !== newParam) {
        // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
        previousSearchParams[param] = params[param];
      }
    }
    
    if (newParam !== '' && newParam !== 1) {
      setSearchParams({...previousSearchParams, [newParamName]: newParam})
    }
    else {
      // @ts-expect-error TS(7053): Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
      delete previousSearchParams[newParamName]
      setSearchParams(previousSearchParams)
    }

  }
  const updatingAllSearchParams = () => {
    if (searchParams.get('category')) {
      // @ts-expect-error TS(2345): Argument of type '{ category: string | null; }' is... Remove this comment to see the full error message
      setSearchParams({ category: searchParams.get('category') });
    }
    else {
      setSearchParams({})
    }
    
  }
  return { updatingSearchParams, updatingAllSearchParams };
}