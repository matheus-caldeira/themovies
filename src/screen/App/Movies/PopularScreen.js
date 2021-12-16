import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Movies from "../../../services/Movies";

function PopularScreen() {
  return (
    <BaseForTabs getDataApi={Movies.getPopular} is_movie />
  )
}

export default PopularScreen;