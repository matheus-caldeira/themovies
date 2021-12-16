import React from "react";

import BaseForTabs from '../../../components/BaseForTabs'
import Favorites from "../../../services/Favorites";

function TvsScreen() {
  return (
    <BaseForTabs getDataApi={Favorites.getFavoritesTvs} />
  )
}

export default TvsScreen;