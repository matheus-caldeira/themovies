import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Tvs from "../../../services/Tvs";

function TopRatedScreen() {
  return (
    <BaseForTabs getDataApi={Tvs.getTopRated} />
  )
}

export default TopRatedScreen;