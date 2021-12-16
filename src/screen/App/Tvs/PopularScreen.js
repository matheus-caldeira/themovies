import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Tvs from "../../../services/Tvs";

function PopularScreen() {
  return (
    <BaseForTabs getDataApi={Tvs.getPopular} />
  )
}

export default PopularScreen;