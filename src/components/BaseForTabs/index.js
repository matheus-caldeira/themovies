import React, { useEffect, useRef, useState } from "react";

import Base from '../ListMedias'

import removeDuplicates from "../../utils/removeDuplicates";

function BaseForTabs({ getDataApi, is_movie = false }) {
  const [data, setData] = useState([]);
  const page = useRef(1);
  const loading = useRef(false);

  const loadData = async _ => {
    if (loading.current) return;

    loading.current = true;

    const { results, total_pages } = await getDataApi(page.current);
    if (results.length) {
      setData(state => removeDuplicates([...state, ...results ]))
      page.current += 1;
      if (total_pages && total_pages < page.current) {
        page.current = -1;
      }
    } else {
      page.current = -1;
    }
    loading.current = false;
  }

  const nextPage = () => {
    if (loading.current) return;

    if (page.current === -1) return;

    loadData();
  }

  useEffect(() => {
    page.current = 1;
    loadData(); 
  }, [])

  return (
    <Base nextPage={nextPage} data={data} is_movie={is_movie} />
  )
}

export default BaseForTabs;